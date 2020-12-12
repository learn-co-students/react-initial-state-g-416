import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

// import ToggleButton from './components/ToggleButton';
import Address from './components/Address';

ReactDOM.render(
  // <div>Components Need To Be Mounted</div>,
  <Fragment>
  <Address street="Santa Monica Blvd."
    city="Santa Monica" />,
  {/* <ToggleButton />, */}
  document.getElementById('root')
  </Fragment>
)