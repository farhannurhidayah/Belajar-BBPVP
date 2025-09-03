let Belanja = [];

Belanja.push('Beras','Minyak','Gula','Buah', 'Sayur', 'Telur');
const Minyak = Belanja.indexOf('Minyak');
console.log();
Belanja.splice(Minyak,1); // (index,berapa data dhapus,angka yang dganti)
Belanja.sort();
console.log("Daftar Belanja Ibu Lily :");
Belanja.forEach(function(value,hitung) {
  console.log(`${hitung + 1}. ${value}`)
})
console.log();