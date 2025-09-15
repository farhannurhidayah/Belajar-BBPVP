var readBooksPromise = require('./promise');

var books = [
    {name:"LOTR", timeSpent:3000},
    {name:"Fidas", timeSpent:2000},
    {name:"Kalkulus", timeSpent:4000},
]

readBooksPromise(10000, books[0])
.then((sisaWaktu) => readBooksPromise(sisaWaktu,books[1]))
.then((sisaWaktu) => readBooksPromise(sisaWaktu,books[2]))
.then((sisaWaktu) => readBooksPromise(sisaWaktu,books[3]))
.then(() => {
    console.log("Ini terakhir")
    });   