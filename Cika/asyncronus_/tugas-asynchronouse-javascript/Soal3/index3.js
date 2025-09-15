var filterBooksPromise = require('./promise2')


console.log("Mengecek Buku......");


filterBooksPromise(true, 50) 
    .then( hasil => {
        console.log(hasil)
    });

async function checkBook(colorful, amountOfPage) {
    try {
        const hasil = await filterBooksPromise(colorful, amountOfPage);
        console.log("Success:", hasil)
    } catch (error) {
        console.log("Error", error)
    }
}
// checkBook(true, 50)
checkBook(false, 250)
checkBook(true, 30)