import React from 'react';

import Foguete from './imgs/Logo/Logo.png'
import './App.css';
import {Card, Footer, Header, Main } from './Style';

function App() {
  return (
  <div>
    <Header>
      <img src={Foguete} className="App-logo" alt="logo" />
      <h1>E-COMMERCE</h1>
    </Header>
    <Main>
      <Card>asdasdas</Card>
      <h1>asdasdasdassad</h1>
    </Main>
    <Footer><h3>Copyright © 2022 Labenu All rights reserved.</h3></Footer>

  </div>
  );
}

export default App;
