let Duit = 800000;

let Headset = 225000;
let Mouse = 150000;
let Keyboard = 350000;

let TotalBelanja = Headset + Mouse + Keyboard;
let Diskon = TotalBelanja * (10/100);
let Bayar = TotalBelanja - Diskon;
let Kembalian = Duit - Bayar;

if (TotalBelanja >= 800000) {
    console.log("Total Belanja = Rp. " + TotalBelanja)
    console.log("Diskon = 15%");
} else if (TotalBelanja >= 500000){
    console.log("Total Belanja = Rp. " + TotalBelanja)
    console.log("Diskon = 10%");
} else if (TotalBelanja >= 250000){
    console.log("Total Belanja = Rp. " + TotalBelanja)
    console.log("Diskon = 5%");
} else {
    console.log("Total Belanja = Rp. " + TotalBelanja)
    console.log("Diskon = 0%");
}
console.log("Total Setelah Diskon = Rp. " + Bayar)
console.log("Pembayaran = Rp. " + Duit)
console.log("Kembalian = Rp. " + Kembalian)



