import { useRef, useState } from 'react';
import Steganography from 'steganography';\nimport { encryptMessage, decryptMessage } from '../utils/aes';

export default function Home() {
  const [message, setMessage] = useState('');
  const [decodedMessage, setDecodedMessage] = useState('');
  const [imageURL, setImageURL] = useState('');\n  const [secretKey, setSecretKey] = useState('');
  const canvasRef = useRef();
  const imageInputRef = useRef();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  };

  const handleEncode = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const encrypted = encryptMessage(message, secretKey);
    const encoded = Steganography.encode(encrypted, imageData);
    ctx.putImageData(encoded, 0, 0);
    setImageURL(canvas.toDataURL());
  };

  const handleDecode = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const decoded = Steganography.decode(imageData);
    const decrypted = decryptMessage(decoded, secretKey);
    setDecodedMessage(decrypted);
  };

  return (
    <div className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center backdrop-blur-md" style={{ backgroundImage: "url('/bg.jpg')" }}>
      <div className="bg-white bg-opacity-20 p-6 rounded-xl shadow-xl w-full max-w-md text-white">
        <h1 className="text-3xl font-bold mb-4 text-center">Steganografi Website</h1>

        <input
          type="file"
          accept="image/*"
          ref={imageInputRef}
          onChange={handleImageUpload}
          className="mb-3 block w-full"
        />

        <input type="password" placeholder="Kunci Rahasia" className="w-full p-2 rounded bg-white bg-opacity-20 border border-white mb-3" value={secretKey} onChange={(e) => setSecretKey(e.target.value)} />\n\n      <textarea
          className="w-full p-2 rounded bg-white bg-opacity-20 border border-white mb-3"
          placeholder="Masukkan username:password"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <div className="flex gap-4 justify-center mb-4">
          <button onClick={handleEncode} className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700">Encode</button>
          <button onClick={handleDecode} className="px-4 py-2 bg-green-600 rounded hover:bg-green-700">Decode</button>
        </div>

        {imageURL && (
          <div className="mb-4 text-center">
            <h2 className="font-semibold">Hasil Gambar:</h2>
            <img src={imageURL} alt="Encoded" className="mt-2 border rounded" />
          </div>
        )}

        {decodedMessage && (
          <div className="text-center">
            <h2 className="font-semibold">Pesan Terdekripsi:</h2>
            <p className="bg-white bg-opacity-20 p-2 rounded mt-2">{decodedMessage}</p>
          </div>
        )}
      </div>

      <canvas ref={canvasRef} className="hidden" />
    </div>
  );
}
