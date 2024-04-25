import React from 'react';
import ReactDOM from 'react-dom';

import Keypad from './components/Keypad';
import EyesOnMe from './components/EyesOnMe';

ReactDOM.render(
  <div>
    <Keypad />
    <EyesOnMe />
    <input type="password" onChange={()=> console.log('Entering password...')} label='password'>T</input>
  </div>,
  document.getElementById('root')
);

