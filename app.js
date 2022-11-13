const express = require("express");

//express app
const app=express();

// listen for requests( here we writing a response to a get req)
app.listen(3000);
//get req listen to that url, inside funct
// req is info of the req like get or post and res can be used to send res 
app.get('/',(req,res)=>{
// res.send('<p>hey this is res for home pg</p>');
res.sendFile('./views/index.html',{root:__dirname}); // mentioning the root is the current directory
})

app.get('/about',(req,res)=>{
  res.sendFile('./views/about.html',{root:__dirname}); 
  })

  // redirecting
app.get('/about-us',(req,res)=>{
  res.redirect('/about')
})
// 404 pg should always be in end
app.use((req,res)=>{
  res.status(404).sendFile('./views/404.html', {root:__dirname})
})
