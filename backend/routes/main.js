module.exports  = function (app) {
  app.get('/', (req, res)=> {
    res.end('Server listening on 4000');
  })
  
};