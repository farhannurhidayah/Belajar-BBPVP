// class Car {
//     constructor(brand) {
//         this.carname = brand;
//     }

//     get carname() {
//         return this._carname;
//     }
//     set carname(x) {
//         this._carname = x ;
//     }
// }

// newcar = new Car('pajero');
// newcar.carname = 'Alphard';
// console.log(newcar.carname);

class siswa{
    constructor(nama, nilai) {
        this._nilai = nilai;          
        this._nama = nama;          
    }

    get nilai() {
        return this._nilai;
    }

    set nilai(mapel) {
        console.log('\n\n====== Ini adalah Setter dan Getter ======');
        console.log(`nama  : ${this._nama}`);
        console.log(`nilai : ${mapel}`);
        if(mapel < 0 || mapel >= 100) {
            console.log(`Range nilai 0 - 100`);
        } else if ( mapel >= 80) {
            console.log(`Grade : A `);
        } else if (mapel >= 70) {
            console.log(`Grade : B `);
        } else if (mapel >= 60) {
            console.log(`Grade : C `);
        } else {
            console.log(`Anda Tidak Lulus`);
        }
    }
       info() {
        console.log('\n====== Ini adalah Method =======');
        console.log(`mobil memiliki kecepatan ${this._nilai} km/jam`)
     if(this._nilai >= 80) {
            console.log("Anda Mendapatkan nilai A");
        } else if (this._nilai >= 70) {
            console.log("Anda Mendapatkan nilai B");
        } else if (this._nilai >= 60) {
            console.log("Anda Mendapatkan nilai C");
        } else {
            console.log("Anda tidak lulus");
        }
    }
}


// var obj1 = new siswa();
// obj1.mapel = 80;

 var obj1 = new siswa('90'); // Buat Insiasi Object
 obj1.info(); // untk Method Info perlu inisiasi nilai di argumen objek

var obj2 = new siswa('farhan', '90'); // Buat Insiasi Object
obj2.nilai = 90; // untuk Set dan Get
