class Luasbangun {
    constructor(a, t, s) {
        this.a = a;
        this.t = t;
        this.s = s;
    }

    ParentSay() {
        console.log(`${this.s} this is the parent class`)
    }
}

// child class
class Persegi extends Luasbangun {
    constructor(s, name){
        super(s)
        this.name = name;
    }
    Luasbangun() {
        console.log(`persegi memiliki sisi ${this.s} maka rumus luas : \nsisi x sisi || ${this.s} x ${this.s} = ${this.s*this.s} `);
        
    }
}
class Segitiga extends Luasbangun {
    constructor(a, t, name){
        super(a);
        this.t = t;
        this.name = name;
    }
    Luasbangun() {
        console.log(`segitiga memiliki alas ${this.a} dan tinggi ${this.t} maka rumus luas : \n 1/2 x alas x tinggi || 1/2 x ${this.a} x ${this.t} = ${1/2*this.a*this.t} `);
        
    }
}

// var obj1 = new Parent('hai');
// obj1.ParentSay();

// var obj2 = new Luasbangun(10, 'farhan');
// obj2.childSay();

var Lpersegi = new Persegi(10, 'farhan');
Lpersegi.Luasbangun()
var Lsegitiga = new Segitiga(12, 10, 'farhan');
Lsegitiga.Luasbangun()


// parent Luas Bangun 
// child persegi
// child      Segitiga