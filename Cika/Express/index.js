const express = require('express');
const movieRoutes = require('./routes/movies') // Import Values
const app = express();
const port = 3000;


app.use(express.json());


app.get('/', (req, res) => {
  res.send("Halo Dunia")
})

app.use('/api/movies',movieRoutes);

app.listen(port, () => {
  console.log(`Ini adalah servenya http://localhost:${port}`)
})