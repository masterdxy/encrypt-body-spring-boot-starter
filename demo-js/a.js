var CryptoJS = require("crypto-js");

let key = CryptoJS.enc.Utf8.parse('7CE935D7D5E27495');//密钥必须是16位，且避免使用保留字符
let encryptedData  = CryptoJS.AES.encrypt("123", key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
});
let hexData = encryptedData.ciphertext.toString();
console.log(hexData);
//================加密================


//================解密================
let encryptedHexStr  = CryptoJS.enc.Hex.parse(hexData);
console.log("encryptedHexStr:" + encryptedHexStr);

let encryptedBase64Str  = CryptoJS.enc.Base64.stringify(encryptedHexStr);
console.log("encryptedBase64Str:" + encryptedBase64Str);

let decryptedData  = CryptoJS.AES.decrypt(encryptedBase64Str, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
});
let text = decryptedData.toString(CryptoJS.enc.Utf8);
console.log(text);
