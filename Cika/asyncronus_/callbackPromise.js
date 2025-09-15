// Callback
function panggilPasien(nomor, callback) {
    setTimeout(() => {
        console.log(`Memanggil pasin nomor ${nomor}`);
        callback();
    }, 1000)
}

// func

panggilPasien(1, () => {
    panggilPasien (2, () => {
        panggilPasien(3, () => {
            console.log("Semua pasien sudah di panggil || ini promise")
        });
    });
});

// Promise
function panggilPasienPromise(nomor) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Memanggil pasie nomor : ${nomor}`)
            resolve();
        }, 1000)
    })
}

panggilPasienPromise(1)
.then(() => panggilPasienPromise(2))
.then(() => panggilPasienPromise(3))
.then(() => panggilPasienPromise(3))
.then(() => {
    console.log("Ini terakhir")
    });   
// 
// panggilPasienPromise(3))


// // Async/Await
// async function jalankanAntrian() {
//     await panggilPasienPromise(1),
//     await panggilPasienPromise(2),
//     await panggilPasienPromise(3);
//     console.log(`Semua Pasien sudah dipanggil`)
// }


async function jalankanAntrian() {
    for(let i = 1; i <= 3; i++) {
        await panggilPasienPromise(i)
    }
    console.log(`Semua Pasien sudah dipanggil`)
}
jalankanAntrian();