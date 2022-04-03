# PeToken: Pet NFT Minter & Marketplace

## Available Frontend-Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

---

## Prerequisites for the following Backend-Scripts

- [Flow command line tool][flow-cli]

### `flow emulator`

The Flow Emulator is a lightweight tool that emulates the behaviour of the real Flow network.

### `flow project deploy`

This command automatically deploys your project's contracts based on the configuration defined in your `flow.json` file.

[flow-cli]: https://www.onflow.org/cli/

### `flow transactions send src/flow/transaction/MintToken.cdc '{"name": "Max", "breed": "Bulldog"}'`

Mint a NFT for the pet object.

### `flow accounts create --key <PUBLIC_KEY> --signer emulator-account`

Create another account, then you need to replace the address for `test-account` in `flow.json` with the new address you obtained in your terminal.

### `flow transactions send src/flow/transaction/InitCollection.cdc —-signer test-account`

Initialize the wallet for test-account.

### `flow transactions send src/flow/transaction/TransferToken.cdc 1 <RECEIVER_ADDRESS>`

Send NFT with id 1 to a address, which is the address for test-account.

### `flow scripts execute src/flow/script/GetTokenOwner.cdc <TOKEN_ID>`

Get the owner's address of the NFT with <TOKEN_ID>.

### `flow scripts execute src/flow/script/GetTokenMetadata.cdc <TOKEN_ID>`

Get the metadata of the NFT with <TOKEN_ID>.

### `flow scripts execute src/flow/script/GetAllTokenIds.cdc`

Get all NFT ids/
