import React from 'react';
import ReactDOM from 'react-dom';

import ToggleButton from './components/ToggleButton.js';
import Address from './components/Address.js';

ReactDOM.render(
  <div>
    Components Need To Be Mounted
    
    <ToggleButton />
    <Address street="Riley Road" city="Marshall" />
    
  </div>,
  document.getElementById('root')
)