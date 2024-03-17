const express = require('express');
const cors = require('cors')
const app = express();
app.use(express.json());
const dataBase = require('./data.json');
const PORT = process.env.PORT || 4000;
const fs = require('fs');

app.use(cors());

app.get('/', (req, res)=> {
    res.end('Server listening on 4000');
});

app.get('/api', (req, res)=> {
    res.json({ data: dataBase });
});

app.post('/order',  (req, res)=> {
  const receivedData = JSON.stringify(req.body);
  
  fs.writeFile( './orders/order.json', `${receivedData}\n`, {encoding: 'utf8', flag: 'a'}, (err) => {
    if( err ) {
      next({message: 'Failed to create file', status: 500})
      return;
    }
  })
  res.end("{}");
});

app.listen(PORT, () =>{
    console.log(`Server is working on port ${PORT}`);
});


