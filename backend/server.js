const express = require('express');
const app = express();
const port = 4000;

require('./routes')(app);

app.listen(port, () =>{
    console.log('work on ' +port);

});
