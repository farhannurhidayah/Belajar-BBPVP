var filterCarsPromise = require('./promise3');

console.log("Mengecek Mobil......");


filterCarsPromise("black", 2019) 
    .then(function(data) {
        // console.log(hasil.cars)
        console.log(data[0])
    })
;

filterCarsPromise("silver", 2017) 
    .then( hasil => {
        console.log(hasil)
    });


async function check(color, year) {
    try {
        const hasil = await filterCarsPromise(color, year);
        console.log("Success:", hasil)
    } catch (error) {
        console.log("Error", error.message)
    }
}


check("abu-abu", 2019)
check("grey", 2018)
check("black", 2020)
