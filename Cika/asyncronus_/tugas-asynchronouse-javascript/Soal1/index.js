var readBooks = require('./callback')

var books = [
    {name: 'LOTR', timespent: 3000},
    {name: 'Fidas', timespent: 2000},
    {name: 'Kalkulus', timespent: 4000},
    {name: 'Komik', timespent: 1000},
]

const time =  10000;
//     for (let i = 0; i <= 3; i++){
//         await readBooks(10000, books[i],)
//     }
// } 
// readBooks()
readBooks(time, books[0], (sisawaktu) => {
    readBooks(sisawaktu, books[1], (sisawaktu) => {
        readBooks(sisawaktu, books[2], (sisawaktu) => {
            readBooks(sisawaktu, books[3], (sisawaktu) => {
                console.log('Semua buku sudah terbaca')

            })    
        })
    })
})

// console.log(books[1].name)
// readBooks(books[1].timespent,books[1].name);