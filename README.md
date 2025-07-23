# 🛡️ Stegano – Web App Steganografi Username/Password ke dalam Gambar

Website berbasis Next.js + TailwindCSS yang memungkinkan kamu untuk **menyembunyikan username & password ke dalam gambar** menggunakan teknik **steganografi**, dengan opsi enkripsi AES atau RSA.

![Vercel](https://img.shields.io/badge/Deploy%20with-Vercel-black?logo=vercel)

---

## ✨ Fitur

- ✅ Encode username:password ke dalam gambar
- 🔐 AES-256 encryption support
- 🔐 RSA public/private key encryption (experimental)
- 🖼️ Dekripsi langsung dari gambar
- 🧾 Export hasil decode ke file `.txt`
- 🌆 Background anime style + UI dengan blur

---

## 🚀 Cara Pakai

1. **Upload gambar**
2. Masukkan data login (`username:password`)
3. Pilih metode enkripsi (AES/RSA)
4. Klik **Encode**
5. Simpan gambar → Bisa decode nanti dengan kunci

---

## 💻 Teknologi

- `Next.js`
- `TailwindCSS`
- `steganography.js`
- `crypto-js`
- `node-forge` (RSA)

---

## 📦 Deploy ke Vercel

> Kamu bisa klik di bawah ini untuk deploy langsung ke akunmu:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/hiuraaaaa/Stegano)

---

## 🧑‍💻 Author

Made with 💚 by [@hiuraaaaa](https://github.com/hiuraaaaa)
