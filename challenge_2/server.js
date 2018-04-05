const express = require('express');
const db = require('./db');
const app = express();

app.use(express.static('public'));
app.get('/', (req, res) => res.send('Hello World!'))
db.connect();

app.listen(3000, () => console.log('Checkout app listening on port 3000!'))

