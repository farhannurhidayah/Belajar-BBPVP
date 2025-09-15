// Overide

// class vehicle {
//     sound() {

//     }
// }

// class car extends vehicle {
//     sound() {
//         console.log('bromm  brommmm')
//     }
// }
// class bike extends vehicle {
//     sound() {
//         console.log('ringgg ringgg')
//     }
// }

// var vehicle1 = new car();
// vehicle1.sound();
// var vehicle2 = new bike();
// vehicle2.sound();
// var vehicle3 = new vehicle();
// vehicle2.sound();


// Overloading
class TypeNumber {
    constructor(number) {
        this.number = number;
        if(typeof number === "string") {
            this.keterangan = `Ini Bukan Angka, tapi string : ${number}`;
        } else {
            this.keterangan = `Ini adalah angka: ${number}`;
        }
    }

    info() {
        console.log(this.keterangan);
    }
}

var number1 = new TypeNumber(20);
number1.info();

// interface