const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const app = express();

app.use(express.static('public'));
var jsonParser = bodyParser.json();
app.get('/', (req, res) => res.send('Hello World!'))
app.post('/customer', (req, res) => {
  db.insertCustomer((err, recordId) => {
    if (err) {
      console.log(err);
    }
    res.send(recordId);
  });
})

app.patch('/customer/:id', jsonParser, (req, res) => {
  db.updateCustomer(req.params.id, req.body, (err, recordId) => {
    if (err) {
      console.log(err);
    }
    res.send('success');
  });
})

db.connect();

app.listen(3000, () => console.log('Checkout app listening on port 3000!'))

