const express = require('express');
const lingkaranTabung = require('./routes/lingkaran-tabung') // Import Values
const app = express();
const port = 3000;

let dataOrang =[
    {id:1, name:"John", umur:30, pekerjaan:"Penulis", jenisKelamin:"L"},
    {id:4, name:"Benzema", umur:34, pekerjaan:"Pemain Bola", jenisKelamin:"L"},
    {id:5, name:"Sarah", umur:27, pekerjaan:"Model", jenisKelamin:"P"},
    {id:9, name:"Shohei Ohtani", umur:28, pekerjaan:"Pemain Basketball", jenisKelamin:"L"},
    {id:11, name:"Maria Sharapova", umur:35, pekerjaan:"Petenis", jenisKelamin:"P"},
]

app.use(express.json());

// Soal 1
// http://localhost:3000//lingkaran-tabung?jari2=10&tinggi=6
app.use('/lingkaran-tabung', lingkaranTabung);

// Soal 2
app.get('/data-orang/:umur/:gender', (req, res) => {
    const gender = req.params.gender;
    const umur = parseInt(req.params.umur);

    let filtered = dataOrang;
    if(umur) {
        filtered = filtered.filter(item => item.umur >= parseInt(umur));
    }
    if(gender) {
        filtered = filtered.filter(item => item.jenisKelamin.toLowerCase() === gender.toLowerCase());
    }

    if (filtered.length === 0) {
        return res.send("Tidak ada data yang sesuai");
    }

    const hasil = filtered.map((item,index) =>
    `${index+1}. ${item.name} - Pekerjaan: ${item.pekerjaan} - Umur: ${item.umur}`. join("<br>"))
    res.send(hasil);
}
);

// Soal 3
app.get('/data-orang/:id', (req, res) => {

    const orang = dataOrang.find(m => m.id == parseInt(req.params.id)); 
   if(!orang){
        return res.send("Maaf data Tidak ditemukan");
    } 
    res.send(`${orang.jenisKelamin === "L" ? 'Pak' : 'Bu'} ${orang.name} adalah seorang ${orang.pekerjaan} yang berusia ${orang.umur} tahun`);
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})