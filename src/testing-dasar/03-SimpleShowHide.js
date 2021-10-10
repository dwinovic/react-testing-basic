import React, { useState } from 'react';

export default function SimpleShowHide() {
  const [show, setShow] = useState(false);
  const toggleShow = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  return (
    <div>
      <p>Saya sedang {show ? 'muncul' : 'sembunyi'} </p>
      <button onClick={toggleShow}>{show ? 'Sembunyi' : 'Muncul'}</button>
    </div>
  );
}
