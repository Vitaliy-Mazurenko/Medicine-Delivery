const express = require('express');
const app = express();
var cors = require('cors')
const dataBase = require('./data.json');
const PORT = process.env.PORT || 4000;
const fs = require('fs');
const { stringify } = require('querystring');

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     next();
// });
app.use(cors());

app.get('/', (req, res)=> {
    res.end('Server listening on 4000');
});

app.get('/api', (req, res)=> {
    res.json({ data: dataBase });
});

app.post('/order',  (req, res)=> {
  const obj = {
    "test" : "writeFile",
    "number" : 12
  };
  
  fs.writeFile( './orders/order.json', stringify(req), {encoding: 'utf8', flag: 'w'}, (err) => {
    if( err ) {
      next({message: 'Failed to create file', status: 500})
      return;
    }
  })
    res.end('NA');
});

app.listen(PORT, () =>{
    console.log(`Server is working on port ${PORT}`);
});


