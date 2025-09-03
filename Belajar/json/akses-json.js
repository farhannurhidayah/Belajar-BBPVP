const fs = require('fs');
// utf-8 untuk membaca file sebagai teks biasa
const teks = fs.readFileSync("data.json","utf-8")
// konversi string JSON menjadi array/object
const data = JSON.parse(teks);
console.log("Isi Awal : ", data);
// Menulis data baru ke JSON
data.push({id:1, nama:"Jeremy", usia:28});
// null, 2 : membuat format menadi 2 spasi per indentasi
fs.writeFileSync("data.json", JSON.stringify(data, null, 20));
console.log("Data Berhasil Diinput  ");
