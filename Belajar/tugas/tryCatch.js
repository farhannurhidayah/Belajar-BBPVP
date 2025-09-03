function bagiAngka(a, b) {
    if (b === 0) {
        // jika pembagi nol → lempar error
        throw new Error("DIV_ZERO");
    }
    let hasil = a / b;
    console.log("Hasil pembagian :", hasil);
}

let angka1 = 10;
let angka2 = 0; // coba ganti ke 5 atau biarkan 0 untuk test

try {
    bagiAngka(angka1, angka2);
    console.log("Program selesai.");
} catch (error) {
    if (error.message === "DIV_ZERO") {
        console.log("Error: Tidak bisa membagi dengan nol!");
    } else if (error instanceof ReferenceError) {
        console.log("Error: Variabel tidak dikenali");
    } else {
        console.log("Terjadi kesalahan lain:", error.message);
    }
    console.log("Program selesai.");
}
