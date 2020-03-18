import React from 'react';
import {Link} from 'react-router-dom'

import Card from './components/Card/Card'


function App() {
  return (
    <div className="App">
      <Link to ="/auth">Авторизация</Link>
      <Card />
    </div>
  );
}

export default App;
