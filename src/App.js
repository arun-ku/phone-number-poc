import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';

import './App.css';
import 'react-phone-number-input/style.css';

const App = () => {
  const [ value, setValue ] = useState('');

  return (
    <div style={{ width: '20%', padding: 50 }}>
      <PhoneInput
        placeholder="Enter phone number"
        value={value}
        onChange={setValue}
      />

      <div style={{ marginTop: 30 }}>
        Phone Number: { value }
      </div>
    </div>
  );
}

export default App;
