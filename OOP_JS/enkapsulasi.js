// enkapsulasi menggunakaan _

class Car {
    #carname;
    constructor(brand) {
        this.#carname = brand;
    }
    get carname() {
        return this.#carname;
    }
    set carname(x) {
        this.#carname = x;
    }
}

newcar = new Car('Wuling');
console.log(newcar.carname)
// console.log(newcar._carname)
// console.log(newcar.#carname)