import React, { useState } from 'react';
import QrReader from 'react-qr-reader' 

export default function QRScanner() {
  const [result, setResult] = useState('No result');
  const [delay] = useState(50);

  const handleScan = (data) => {
    if (data) {
      console.log(data)
      setResult(data);
    }
  };

  const handleError = (err) => {
    setResult('error')
  };

  const previewStyle = {
    height: '300px',
    width: '300px',
  }

  return(
    <div>
      <QrReader
        delay={delay}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
        />
      <p>{result}</p>
    </div>
  )
}
