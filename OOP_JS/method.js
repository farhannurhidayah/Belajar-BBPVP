// membuat method dalam class
// class Car{
//     sound() {
//         return "bremmm... bremmm"
//     }
// }

// var obj1 = new Car();
// console.log(obj1.sound());

// class Car{
//     sound(x) {
//         return x + ", My car makes sound lik : breemm";
//     }
// }

// var obj1 = new Car();
// console.log(obj1.sound('nnge'));

class Car{
    constructor(kecepatan) {
        this._kecepatan = kecepatan;
    }
    get kecepatan() {
        return this._kecepatan;
    }
    
    set kecepatan(jumlah) {
        if(jumlah < 0) {
            console.log("kecepatan nilainya dibawah 0");
        } else{
            this._kecepatan = jumlah;
        }
    }
    info() {
        console.log(`mobil memiliki kecepatan ${this._kecepatan} km/jam`)
        if (this._kecepatan < 0) {
            console.log("Mobil sedang berjalan");
    } else {
        console.log('Mobil Berhenti')
    }
    }
}

var obj1 = new Car();
obj1.kecepatan = 100
var obj2 = new Car(0);
obj2.info();
// var obj3 = new Car(20);
// obj3.info();

// console.log(obj1.kecepatan);
