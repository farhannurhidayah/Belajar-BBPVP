class Restaurant {
  constructor(nama) {
    this.nama = nama;

    // Data menu, harga, dan stok
    this.nasiGoreng = {harga: 20000,stok: 20,pesanan: 0};

    this.ayamBakar = {harga: 15000,stok: 10,pesanan: 0};
  }

  // Setter untuk pesanan
  set order(pesanan) {
    if (pesanan.nasiGoreng <= this.nasiGoreng.stok) {
      this.nasiGoreng.pesanan = pesanan.nasiGoreng;
    } else {
      console.log("Stok Nasi Goreng tidak cukup.");
    }

    if (pesanan.ayamBakar <= this.ayamBakar.stok) {
      this.ayamBakar.pesanan = pesanan.ayamBakar;
    } else {
      console.log("Stok Ayam Bakar tidak cukup.");
    }
  }

  // Getter untuk total bayar
  get totalBayar() {
    return (this.nasiGoreng.pesanan * this.nasiGoreng.harga) +
           (this.ayamBakar.pesanan * this.ayamBakar.harga);
  }

  // Method untuk menampilkan semua informasi
  hitung() {
    console.log(this.nama);

    console.log("\n===== Menu =====");
    console.log(`1. Nasi Goreng Rp. ${this.nasiGoreng.harga} (Stok: ${this.nasiGoreng.stok})`);
    console.log(`2. Ayam Bakar Rp. ${this.ayamBakar.harga} (Stok: ${this.ayamBakar.stok})`);

    console.log("\nJumlah Pesanan");
    console.log(`Nasi Goreng : ${this.nasiGoreng.pesanan}`);
    console.log(`Ayam Bakar  : ${this.ayamBakar.pesanan}`);

    console.log(`\nTotal bayar : Rp. ${this.totalBayar}`);
  }
}

// Penggunaan
const resto = new Restaurant("Warung Enak");

// Memasukkan pesanan (tanpa perulangan)
resto.order = {
  nasiGoreng: 21,
  ayamBakar: 2
};

// Menampilkan output
resto.hitung();
