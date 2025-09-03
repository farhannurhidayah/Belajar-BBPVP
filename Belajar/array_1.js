// Array 1d
console.log("Array 1d");
let buah = ["apel", "Jeruk", "Mangga", "Pir"];
// menampikan array
console.log(buah[2]);
console.log();

//Array Object
console.log("Array Object");
let mobil = [
  { merk: "BMW", warna: "Merah", tipe: "Sedan" },
  { merk: "Toyota", warna: "Hitam", tipe: "Box" },
  { merk: "Audi", warna: "Biru", tipe: "Sedan" },
];
console.log(mobil[0].warna);
console.log(mobil[2].tipe);
console.log();

// Panjang Array 
console.log("Panjang Array");
console.log(buah.length);
console.log();

// foreach
console.log("Array Foreach")
buah.forEach(function(value,hitung) {
  console.log("Index ke - " + hitung + " : " + value)
})
console.log();

// foreach object
console.log("Array Foreach 0bject")
mobil.forEach(function(item,index){
  console.log(`Mobil ke  ${index + 1} `)
  console.log(`Merk : ${item.merk}`)
  console.log(`Warna : ${item.warna}`)
  console.log(`Tipe : ${item.tipe}`)
})
console.log()

// Map  (Untuk Buat data)
console.log("Map")
let arrayWarna =mobil.map(function(item){
  return item.warna;
})
console.log(arrayWarna);
console.log();

// Filter (Untuk mencari data)
console.log("Array Filter")
let arrayMobilFilter =mobil.filter(function(item){
  return item.tipe != "Sedan";
})
console.log(arrayMobilFilter);
console.log();

