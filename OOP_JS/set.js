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
    constructor(nilai) {
        this._nilai = nilai;          
    }

    get nilai() {
        return this._nilai;
    }

       info() {
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

var obj2 = new siswa();
// var obj3 = new siswa(80);
obj2.info('90');
