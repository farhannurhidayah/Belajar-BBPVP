function hitungLuasPersegi(sisi) {
    return sisi * sisi;
}
function hitungKelilingPersegi(sisi) {
    return 4 * sisi;
}
function hitungLuasPersegiPanjang(p,l) {
    return p * l;
}
function hitungKelilingPersegiPanjang(p,l) {
    return 2 *(p + l);
}
function hitungLuasLingkaran(r) {
    let phi = 22/7;
    return phi * r * r;
}
function hitungKelilingLingkaran(r) {
    let phi = 22/7;
    return 2 * phi * r;
}
function hitungLuasSegitiga(a,t) {
    return 1/2 * a * t;
}
function hitungKelilingSegitiga(sisi) {
    return sisi + sisi + sisi;
}

function tampilkanLuas() {
    console.log("==== MENGHITUNG LUAS DAN KELILING BANGUN DATAR ==== \n" );
    console.log(">> Luas Bangun Datar <<");
    console.log("Luas Persegi  Dengan Sisi 8 Adalah", hitungLuasPersegi (8));
    console.log("Luas Persegi Panjang Dengan Panjang 9 dan Lebar 3 Adalah", hitungLuasPersegiPanjang (9,3));
    console.log("Luas Lingkaran Dengan Jari - jari 6 Adalah", hitungLuasLingkaran (6));
    console.log("Luas Segitiga Dengan Alas 6 dan Tinggi 4 Adalah", hitungLuasSegitiga (6,4));

}
function tampilkanKeliling() {
    console.log("\n>> Keliling Bangun Datar <<");
    console.log("Luas Persegi  Dengan Sisi 8 Adalah", hitungKelilingPersegi (8));
    console.log("Luas Persegi Panjang Dengan Panjang 9 dan Lebar 3 Adalah", hitungKelilingPersegiPanjang (9,3));
    console.log("Luas Lingkaran Dengan Jari - jari 6 Adalah", hitungKelilingLingkaran (6));
    console.log("Luas Segitiga Dengan Alas 6 dan Tinggi 4 Adalah", hitungKelilingSegitiga (6));

}

tampilkanLuas();
tampilkanKeliling();
