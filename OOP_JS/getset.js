// class Car{
//     constructor(brand) {
//         this._carname = brand;
//     }

//     get carname() {
//         return this._carname
//     }

//     set carname(x) {
//         this._carname = x;
//     }
// }

// newcar = new Car('pajero');
// newcar.carname = 'Alphard';
// console.log(newcar.carname);



class Car{
    constructor(kecepatan) {
        this._kecepatan = kecepatan;
    }

    get kecepatan() {
        return this._kecepatan
    }

    set kecepatan(jumlah) {
      if (jumlah < 0) {
        console.log("Kecepaan tidak bleh negatif!");
      } else {
        this._kecepatan = jumlah;
      }
    }
}

newcar = new Car();
newcar.kecepatan = -20;
