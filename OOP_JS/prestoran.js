// Penggunaan
const Restaurant = require(`./tugasrestoran`)
const resto = new Restaurant("Warung Enak");

// Input pesanan (ada yang lebih dari stok untuk uji validasi)
resto.order = {
  nasiGoreng: 21, // ❌ melebihi stok
  ayamBakar: 2
};

// Menampilkan output
resto.hitung();
