let jumlah = 0;

for (let i = 1; i <= 20; i++) {
    if(i % 2 === 1) {
        console.log(i + " Mengikuti Pelatihan");

    } else if (i % 2 === 0) {
        console.log (i + " Apel Pagi");
    } else if ( i % 2 === 1 || 3 ** i ) {
        console.log (i + " Mengikuti Uji Kompetensi");
        
    }
}


console.log("Jumlah semua bilangan genap tersebut adalah:", jumlah);