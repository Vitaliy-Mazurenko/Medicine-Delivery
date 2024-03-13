const express = require('express');
const app = express();
const dataBase = require('./data.json');
const PORT = process.env.PORT || 4000;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  });

  app.get('/', (req, res)=> {
    res.end('Server listening on 4000');
  });

  app.get('/api', (req, res)=> {
    res.json({ data: dataBase });
  });

app.listen(PORT, () =>{
    console.log('work on ' +PORT);

});
