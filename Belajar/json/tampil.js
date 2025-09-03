const fs = require('fs');
// Baca Isi File
const isiFile = fs.readFileSync("data.json","utf-8");
const data = JSON.parse(isiFile);
// Menampilkan format data.json
console.log("Isi data.json: ", data);
// menampilkan format sesuai objec
data.forEach((item) => {
    console.log(`id: ${item.id}, Nama : ${item.nama}, Usia : ${item.usia}`);
})