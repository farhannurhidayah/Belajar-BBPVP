let sepatu = [
    {namasepatu:"New Balance NB530", Harga: 390000},
    {namasepatu:"Nike Vomero 5", Harga: 350000},
    {namasepatu:"Adidas Samba", Harga: 180000},
    {namasepatu:"Onitsuka Tiger Mexico", Harga: 420000}
];


sepatu.forEach(function(item,index){
  console.log(`${index + 1}.${item.namasepatu} - Rp. ${item.Harga}   `)
})

let total = 0;
sepatu.forEach(function(item){ 
     total += item.Harga ;
    })

console.log();
console.log(`Total Belanja = Rp. ${total}`)
let diskon = 0;
if (total >= 800000) {
    console.log (`Diskon = ${diskon=15} %`);
} else if (total > 500000) {
    console.log (`Diskon = ${diskon=10} %`);
} else if (total > 250000) {
    console.log (`Diskon = ${diskon=5} %`);
} else {
    console.log (`Diskon = ${diskon=0} %`);
}

let bayar = 0;
console.log(`Total Setelah Diskon = Rp. ${ bayar=(total)-(15/100*total)}`)

let pembayaran = 1200000;

console.log(`Pembayaran = Rp. ${pembayaran}`);
console.log(`Kembalian = Rp. ${pembayaran-bayar}`);
