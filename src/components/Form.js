import { useState } from "react"
import mintToken from "../flow/transaction/MintToken.tx";
import FileSelector from "./FileSelector";


const style = {
  marginLeft: 'auto',
  marginRight: 'auto',
  maxWidth: 350,
};

const Form = () => {
  const [pet, setPet] = useState({});

  const setName = (event) => {
    const name = event.target.value;
    setPet({...pet, name});
  };

  const setBreed = (event) => {
    const breed = event.target.value;
    setPet({...pet, breed});
  };

  const setAge = (event) => {
    const age = event.target.value;
    setPet({...pet, age});
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const txId = await mintToken(pet);
      console.log(txId);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div style={style}>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <FileSelector pet={pet} setPet={setPet} />
          <div>
            <label htmlFor="nameInput">Pet's name</label>
            <input
              className="u-full-width"
              type="text"
              placeholder="ToFu"
              id="nameInput"
              onChange={setName}
            />
          </div>
          <div>
            <label htmlFor="breedInput">Breed</label>
            <select
              className="u-full-width"
              id="breedInput"
              onChange={setBreed}
            >
              <option value="american-shorthair">American Shorthair</option>
              <option value="shiba-inu">Shiba Inu</option>
            </select>
          </div>
          <div>
            <label htmlFor="ageInput">Age</label>
            <select
              className="u-full-width"
              id="ageInput"
              onChange={setAge}
            >
              {
                [...Array(20).keys()].map(age => <option value={age} key={age}>{age}</option>)
              }
            </select>
          </div>
        </div>
        <input className="button-primary" type="submit" value="Mint" style={{ 'marginTop': '2rem' }} />
      </form>
    </div>
  );
};

export default Form;
