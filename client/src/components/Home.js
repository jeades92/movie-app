import React, { useState } from 'react';
import Header from "./Header"

function App() {
  const [name, setName] = useState('Guest');
    function login() {
    setName("Username")
  }

  return (
    <div className="App">
      <Header title={name} />
      <p> Welcome to the Movie Site </p>
      <button onClick={login}>Log in</button>
    </div>
  );
}

export default App;
