// menambah elemen di akhir
console.log("Menambah Elemen Di Akhir");
let buah = ['Apel', 'Jeruk'];
buah.push('Mangga');
console.log(buah);
console.log();

// Menghapus Elemen Di Akhir
console.log("Menghapus Elemen Di Akhir");
buah.pop();
console.log(buah);
console.log();

// Menambah Elemen Di Awal
console.log("Menambah Elemen Di Awal");
buah.unshift('Mangga');
console.log(buah);
console.log();

// Menghapus Elemen Di Awal
console.log("Menghapus Elemen Di Awal");
buah.shift('Mangga');
console.log(buah);
console.log();

// Menambah Elemen Di posisi tertentu
console.log("Menambah Elemen Di tertentu");
let angka = [1,2,4,5]
angka.splice(2, 0, 3); // (index,berapa data dhapus,angka yang dganti)
console.log(angka);
console.log();

// Menhapus Elemen Di posisi tertentu
console.log("Menghapus Elemen Di Awal");
let angka1 = [1,2,3,4,5]
angka.splice(2, 2); // (index,berapa data dhapus,angka yang dganti)
console.log(angka);
console.log();

// Mengambil sebagian array
console.log("Mengambil sebagian array");
let angka2 = [1,2,3,4,5]
let potong = angka2.slice(1, 4);
 // (index,berapa data dhapus,angka yang dganti)
console.log(potong);
console.log();

