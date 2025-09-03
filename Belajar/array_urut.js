console.log("Urut Alfabetis");
let nama = ['Emily', 'Mark', 'Ashley', 'James'];
nama.sort();
console.log(nama);

console.log("Urut Descending");
let angkaDesc = [40,100,1,5,25,10];
angkaDesc.sort(function(a,b){
    return b - a ; 
})

console.log(angkaDesc);
console.log();

console.log("Urut Ascending");
let angkaAsc = [40,100,1,5,25,10];
angkaAsc.sort(function(a,b){
    return a - b ; 
})
console.log(angkaAsc);
console.log();


console.log("Urut Object");
let siswa = [
    {nama:"Ali", nilai:85},
    {nama:"Budi", nilai:92},
    {nama:"Cici", nilai:75},
];

// function arrow
/* fungsi biasa
 */
siswa.sort((a,b) => a.nilai - b.nilai);
console.log(siswa);
