const fs = require("fs");

const filePath = "daftarFilm.json";
let daftar = [];

// Cek apakah file sudah ada
if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, "utf8");
    daftar = JSON.parse(content);
}

// data siswa baru
let filmbaru1 = {
    nama: "Agak laen",
    tahun: "(2024)",
    genre: "Horor, Komedi",
};
let filmbaru2 = {
    nama: "Habibie & Ainun",
    tahun: "(2012)",
    genre: "Drama, Romantis",
};
let filmbaru3 = {
    nama: "Dilan 1990",
    tahun: "(2018)",
    genre: "Romantis",
};


// Tambahkan ke array
daftar.push(filmbaru1);
daftar.push(filmbaru2);
daftar.push(filmbaru3);

// simpan kembali ke file
console.log("Daftar Film:")
console.log(`1. ${daftar[0].nama} ${daftar[0].tahun} - ${daftar[0].genre} `);
console.log(`2. ${daftar[1].nama} ${daftar[1].tahun} - ${daftar[1].genre} `);
console.log(`3. ${daftar[2].nama} ${daftar[2].tahun} - ${daftar[2].genre} `);