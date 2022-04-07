import * as fcl from '@onflow/fcl';
import * as t from '@onflow/types';
import code from './GetTokenMetadata.cdc';

async function getTokenMetadata(id) {
  let cdc = await (await fetch(code)).text();

  const encoded = await fcl.send([
    fcl.script(cdc),
    fcl.args([fcl.arg(id, t.UInt64)]),
  ]);

  const metadata = fcl.decode(encoded);

  return metadata;
}

export default getTokenMetadata;
