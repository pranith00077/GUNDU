const express = require('express');
const app= express();
const port = 3000;
app.get('/',(req,res)=>{
    res.send('Hello World');
});
app.get('/:id', (req,res) => {
  const id = req.params.id;
  console.log('got id route, id=', id);
  res.send(`Hello!! ${id}`);
});
// Use a different route pattern so it doesn't conflict with `/:id`
app.get('/name/:name',(req,res)=>{
    const name = req.params.name;
    res.send(`Hello!! ${name}`);
});
app.listen(port,()=>{
 console.log(`Example app listening on port ${port}`);
});
