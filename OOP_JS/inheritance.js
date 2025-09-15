class Parent {
    constructor(greeting) {
        this.greeting = greeting;
    }

    ParentSay() {
        console.log(`${this.greeting} this is the parent class`)
    }
}

// child class
class Child extends Parent {
    constructor(greeting, name){
        super(greeting);
        this.name = name;
    }
    childSay() {
        console.log(`${this.greeting}, ${this.name} this is the cild class`);
        
    }
}

var obj1 = new Parent('hai');
obj1.ParentSay();

var obj2 = new Child('halo', 'farhan');
obj2.childSay();


// parent Luas Bangun 
// child persegi
// child      Segitiga