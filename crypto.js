// crypto.js - ESM module for cryptographic functions
import * as aesjs from "https://cdn.jsdelivr.net/npm/aes-js@3.1.2/+esm";
import { sha256 } from "https://cdn.jsdelivr.net/npm/js-sha256@0.9.0/+esm";

export function modPow(base, exp, mod) {
  let result = 1n;
  base %= mod;
  while (exp > 0) {
    if (exp % 2n === 1n) result = (result * base) % mod;
    exp >>= 1n;
    base = (base * base) % mod;
  }
  return result;
}

export function deriveKey(secret) {
  // Returns a Uint8Array (32 bytes) for AES-256
  const hex = sha256(secret.toString());
  const hashBytes = aesjs.utils.hex.toBytes(hex);
  return hashBytes.slice(0, 32);
}

export function encryptMessage(key, text) {
  // key: Uint8Array (32 bytes), text: string
  const iv = window.crypto.getRandomValues(new Uint8Array(16));
  const textBytes = aesjs.utils.utf8.toBytes(text);
  const aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(iv));
  const encryptedBytes = aesCtr.encrypt(textBytes);
  return aesjs.utils.hex.fromBytes(iv) + aesjs.utils.hex.fromBytes(encryptedBytes);
}

export function decryptMessage(key, hex) {
  // key: Uint8Array (32 bytes), hex: string
  const iv = aesjs.utils.hex.toBytes(hex.slice(0, 32));
  const encryptedBytes = aesjs.utils.hex.toBytes(hex.slice(32));
  const aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(iv));
  const decryptedBytes = aesCtr.decrypt(encryptedBytes);
  return aesjs.utils.utf8.fromBytes(decryptedBytes);
}
