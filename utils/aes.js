import CryptoJS from 'crypto-js';

export function encryptMessage(message, secretKey) {
  return CryptoJS.AES.encrypt(message, secretKey).toString();
}

export function decryptMessage(ciphertext, secretKey) {
  try {
    const bytes = CryptoJS.AES.decrypt(ciphertext, secretKey);
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);
    return decrypted || 'Gagal didekripsi (mungkin salah kunci)';
  } catch (e) {
    return 'Gagal didekripsi';
  }
}
