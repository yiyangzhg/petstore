import { useState, useEffect } from 'react';
import getTokenIds from '../flow/script/GetTokenIds.sc';
import getTokenMetadata from '../flow/script/GetTokenMetadata.sc';
import { toGatewayURL } from 'nft.storage';

const style = {
  padding: '1rem',
  paddingTop: '5rem',
  background: 'white',
  maxWidth: 350,
  margin: 'auto',
};

const QueryToken = () => {
  const [selectedId, setSelectedId] = useState(1);
  const [metadata, setMetadata] = useState(null);
  const [tokenIds, setTokenIds] = useState([]);

  useEffect(() => {
    getTokenIds().then(setTokenIds);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let metadata = await getTokenMetadata(selectedId);
      let dataURL = toGatewayURL(metadata.url);

      let {file: image} = await (await fetch(dataURL)).json();
      let newMetadata = {...metadata, image:toGatewayURL(image)};
      console.log(newMetadata);
      setMetadata(newMetadata);
    } catch (err) {
      window.alert(`Token ID '${selectedId}' does not exist!`)
    }
  };

  const MetadataTable = ({metadata}) => (
    <table className='u-full-width'>
      <thead>
        <tr>
          {
            Object.keys(metadata).map((key, i) => (
              key === 'url' || key === 'file' ? null : <th key={i}>{key}</th>
            ))
          }
        </tr>
      </thead>
      <tbody>
        <tr>
          {
            Object.keys(metadata).map((key, i) => {
              switch (key) {
                case 'url':
                  return null;
                case 'file':
                  return null;
                case 'image':
                  return (
                    <td key={i}>
                      <img alt='' src={metadata[key]} width='60px' />
                    </td>
                  );
                default:
                  return <td key={i}>{metadata[key]}</td>
              }
            })
          }
        </tr>
      </tbody>
    </table>
  );

  return (
    <div style={style}>
    <form onSubmit={handleSubmit}>
      <div className='row'>
        <div>
          <label htmlFor='idInput'>Pet's ID</label>
          <select
            className='u-full-width'
            type='number'
            id='idInput'
            onChange={(e) => setSelectedId(parseInt(e.target.value))}
          >
            {tokenIds.map(id => <option value={id} key={id}>{id}</option>)}
          </select>
        </div>
      </div>
      <input className="button-secondary" type="submit" value="Query" style={{ 'marginTop': '2rem' }} />
    </form>
    {
      metadata ? <MetadataTable metadata={metadata} /> : null
    }
    </div>
  )
}

export default QueryToken;
