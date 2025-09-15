// di callback js

function readBooks(time, book, callback) {
    console.log("saya membaca" + book.name)
    setTimeout(function() {
        let sisawaktu = 0;
        if(time >= book.timespent) {
            sisawaktu = time - book.timespent
            console.log("saya sudah membaca" + book.name + ", sisa waktu saya " + sisawaktu)
            callback(sisawaktu) //menjalankan function callback
        } else {
            console.log("waktu saya habis")
            callback(time)
        }
    }, book.timespent)
}

module.exports = readBooks;