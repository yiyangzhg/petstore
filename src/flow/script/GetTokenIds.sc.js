import * as fcl from '@onflow/fcl';
import code from './GetTokenIds.cdc';

async function getTokenIds() {
  let cdc = await (await fetch(code)).text();

  const encoded = await fcl.send([fcl.script(cdc)]);

  const tokenIds = await fcl.decode(encoded);

  return tokenIds.sort((a, b) => a - b);
}

export default getTokenIds;
