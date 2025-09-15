const express = require('express');
// const movieRoutes = require('./routes/movies') // Import Values
const app = express.Router();
const port = 3000;


app.get('/', (req, res) => {
    const jari2 = req.query.jari2;
    const tinggi = req.query.tinggi;
    function luas(r) {
        const phi = 3.14;
        L = phi * (r * r);
        return L
    }
    function volume(r, t) {
        const phi = 3.14;
        L = phi * (r * r) * t;
        return L
    }
    function keliling(r) {
        const phi = 3.14;
        L = 2 * phi * r ;
        return L
    }
   res.send(`\nJari - Jari : ${jari2}, Tinggi ${tinggi}, volume tabung :${volume(jari2, tinggi)} luas alas tabung : ${luas(jari2)}, keliling alas tabung : ${Math.round(keliling(jari2))}`);
});

module.exports = app;