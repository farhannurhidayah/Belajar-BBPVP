// callback sinkron

// sapa sebagai fungsi callback
// function sapa(s) {
//     console.log(`Halo ini adalah  ${s} = ${s * s} `)
// }

// function prosesNama(callback) {
//     let s = 10;
//     callback(s);
// }

// prosesNama(sapa);

function hitung(angka1, angka2, operasi){
    console.log(`Menjalankan perhitungan untuk ${angka1} dam ${angka2}`)
    const hasil = operasi(angka1, angka2);
    console.log(`Hasil adalah ${hasil}`);
}

function tambah(a,b) {
    return a + b; 
}
function kali(a,b) {
    return a * b; 
}
function bagi(a,b) {
    return a / b; 
}

hitung(1,2, tambah);

// Callback asinronus

function selesai() {
    console.log('Proses ini telah selesai');
}

console.log('Mulai Proses');
setTimeout(selesai ,2000);
console.log('Proses lain berjalan');




