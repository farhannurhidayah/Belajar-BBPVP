let Duit = 100000;
let NasiGoreng = 25000;
let MieGoreng = 22000;
let Capcay = 32000;

let TotalMakanan = NasiGoreng + MieGoreng + Capcay;
let diskon = TotalMakanan * (10/100);
let Bayar = TotalMakanan - diskon;
let Kembalian = Duit - Bayar;


console.log("Harga Nasi Goreng = Rp. " + NasiGoreng)
console.log("Harga Mie Goreng = Rp. " + MieGoreng)
console.log("Harga Capcay = Rp. " + Capcay)
console.log("Harga Total = Rp. " + TotalMakanan)
console.log("Diskon = 10% " )
console.log("Harga Setelah Diskon = Rp. " + Bayar)
console.log("Pembayaran = RP. " + Duit)
console.log("Kembalian = RP. " + Kembalian)


