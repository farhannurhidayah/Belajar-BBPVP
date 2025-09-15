class siswa{
    constructor(nama, nilai) {
        this._nilai = nilai;          
        this._nama = nama;          
    }

    get nilai() {
        return this._nilai;
    }

    get nama() {
        return this._nama;
    }

    set nama(name) {
        this._nama = name;
        console.log(`nama  : ${this._nama}`);
    }

    set nilai(mapel) {
        this._nilai = mapel;
        console.log(`nilai : ${this.nilai}`);
        if(mapel < 0 || mapel >= 100) {
            console.log(`Nilai harus 0 - 100`);
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
}


// var obj1 = new siswa();
// obj1.mapel = 80;

 var obj1 = new siswa(); // Buat Insiasi Object
 obj1.nama = 'Farhan';  // untk Method Info perlu inisiasi nilai di argumen objek
 obj1.nilai = -10 ;