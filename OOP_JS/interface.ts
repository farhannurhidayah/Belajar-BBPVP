interface Animal {
    nama : string;
    suara() : void;
}

interface kategori {
    deskripsi : string;
}

class Cat implements Animal, kategori {
    nama : string;
    deskripsi: string;

    constructor(nama : string, deskripsi : string) {
        this.nama = nama;
        this.deskripsi = deskripsi;

    }
    suara(): void {
        console.log(`${this.nama} ${this.deskripsi} says Meowww`)
    }
}

const kucing1 = new Cat("Kitty","Mamalia");
kucing1.suara();