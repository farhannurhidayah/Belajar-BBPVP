// class Car {
//     constructor(brand,color) {
//         this.brand = brand;
//         this.color = color;
//     }

// }

// // instantiate class - membuat objek
// var Obj1 = new Car('Mitsubishi','Blue');
// console.log(`ini mobil ${Obj1.color} dan warnanya ${Obj1.brand}`);

// var Obj2 = new Car('Tesla');
// console.log(Obj2.brand);

var Car = class car{
    constructor(brand){
        this.brand = brand;
    }
}

var obj1 = new Car('Sedan');
console.log(obj1);