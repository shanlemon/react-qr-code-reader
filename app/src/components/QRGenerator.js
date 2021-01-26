import React, {useRef, useState} from 'react'
import QRCode from 'qrcode'

function QRGenerator() {

  const [qrURL, setQrURL] = useState('');
  const inputRef = useRef();

  var opts = {
    errorCorrectionLevel: 'H',
    type: 'image/jpeg',
    margin: 1,
  }

  const generateQRCode = (e) => {
    e.preventDefault();
    QRCode.toDataURL(inputRef.current.value, opts, function (err, url) {
      if (err) throw err
      setQrURL(url);
    })
  }

  return (
    <div>
      <h1>QR Code Generator</h1>
      <form onSubmit={generateQRCode}>
        <input type="text" ref={inputRef} style={{margin: '0 1rem 0 0'}}/>
        <button onClick={generateQRCode}>Generate</button>
      </form>
      <br />
      {qrURL && (
        <>
        <img src={qrURL} style={{width: '200px'}} alt="qr code"/>
        <p>{inputRef.current.value}</p>
        </>
      )}

    </div>
  )
}

export default QRGenerator
