let siswa = [
  { nama: "Rose", tinggi: "178"},
  { nama: "Magnolia", tinggi: "153"},
  { nama: "Daisy", tinggi: "165"},
  { nama: "Jasmine", tinggi: "161"},
  { nama: "Violet", tinggi: "159"},
];
siswa.forEach(function(item,index) {
  console.log(item.nama + " memiliki tinggi " + item.tinggi + " cm")
})
console.log();