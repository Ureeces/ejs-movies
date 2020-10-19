const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.set(express.static(path.join(__dirname, 'public')));

app.use('/movies', require('./routes/movieRoutes'));

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});