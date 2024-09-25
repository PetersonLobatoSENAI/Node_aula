const express = require('express');

const cors = require('cors');

const app = express();

 
app.use(cors());
 

let items = ['Item 1', 'Item 2', 'Item 3'];

 
app.get('/api/items', (req, res) => {
  res.json(items);
});

 

app.listen(4000, () => {
  console.log('Servidor rodando na porta 4000');

});