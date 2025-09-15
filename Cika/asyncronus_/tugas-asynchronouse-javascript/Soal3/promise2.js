function filterBooksPromise(colorful, amountOfPage) {
    return new Promise(function(resolve, reject) {
        var books = [
            {name: "shincan", totalPage: 50, isColorful: true},
            {name: "Kalkulus", totalPage: 250, isColorful: false},
            {name: "doraemon", totalPage: 50, isColorful: true},
            {name: "algoritma", totalPage: 250, isColorful: false},
        ]
        if (amountOfPage >= 40) {
            resolve(books.filter(x=> x.totalPage == amountOfPage && x.isColorful == colorful));
        } else {
            var reason = "Maaf buku dibawah 40 halaman tidak tersedia";
            reject(reason);
        }
    });
}

module.exports = filterBooksPromise