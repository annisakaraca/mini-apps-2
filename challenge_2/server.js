const express = require('express');
const db = require('./db');
const app = express();

app.use(express.static('public'));
app.get('/', (req, res) => res.send('Hello World!'))
app.post('/customer', (req, res) => {
  db.insertCustomer((err, recordId) => {
    if (err) {
      console.log(err);
    }
    res.send(recordId);
  });
})
db.connect();

app.listen(3000, () => console.log('Checkout app listening on port 3000!'))

