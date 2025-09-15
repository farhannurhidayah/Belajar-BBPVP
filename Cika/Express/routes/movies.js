const express = require('express');
const router = express.Router();

// data dummy
let movies = [
  { id: 1, title: "Jawa", year: 1940 },
  { id: 2, title: "Sunda", year: 1944 }
];


// Read/ menampilkan data, GET
router.get('/', (req, res) => {
    res.send(movies);
});

// Read/ menampilkan data tertentu Get /api/movies/:id
router.get('/:id', (req, res) => {
    const movieId = movies.find(m => m.id == parseInt(req.params.id)); 
    if(!movieId) return res.status(404).json({message : "Movie not found"});
    res.json(movieId);
});

// Create, Post, 
router.post('/', (req, res) => {
    const newMovie = {
        id : movies.length + 1,
        title : req.body.title,
        year : req.body.year
    };
    movies.push(newMovie);
    res.status(201).json(newMovie);
});
// Update Pur

router.put('/:id', (req, res) => {
    const movieUpdate = movies.find(m => m.id === parseInt (req.params.id));
    if(!movieUpdate) return res.status(404).json({message : "Movie not found"});

    // Setting uodate data baru
    movieUpdate.title = req.body.title ||  movieUpdate.title;
    movieUpdate.year = req.body.year || movieUpdate.year;
    
    res.json(movieUpdate);
}); 

// Delete, Delete
router.delete('/:id', (req, res) => {
    movies = movies.filter(m => m.id !== parseInt(req.params.id));
    res.status(204).end();

    // 204 no content
    // end untuk mengakhiri respon tanpa ada ancaman
});

module.exports = router;
