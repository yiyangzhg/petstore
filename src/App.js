import './App.css';
import Form from './components/Form';
import * as fcl from '@onflow/fcl';
import { useEffect, useState } from 'react';
import QueryToken from './components/QueryToken';

fcl.config({
  "accessNode.api": "http://localhost:8080",
  "discovery.wallet": "http://localhost:8701/fcl/authn",
});

function AuthenticateBlock() {
  const logIn = () => {
    fcl.authenticate();
  }

  return (
    <div>
      <div>Please log in</div>
      <button onClick={logIn}>Log in</button>
    </div>
  );
}

function UnauthenticateBlock({user}) {
  const logOut = () => {
    fcl.unauthenticate();
  }

  return (
    <div>
      <div>Logged in as: {user.addr}</div>
      <button onClick={logOut}>Log out</button>
      <Form />
      <QueryToken />
    </div>
  );
}

function App() {
  const [user, setUser] = useState({addr: ''});

  useEffect(() => {
    fcl.currentUser.subscribe(setUser);
  }, []);

  return (
    <div className="App">
      {user.addr ? <UnauthenticateBlock user={user} /> : <AuthenticateBlock />}
    </div>
  );
}

export default App;
