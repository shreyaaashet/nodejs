const express = require("express");
const morgan = require("morgan");

//express app
const app=express();



// register view engine
app.set('view engine','ejs'); // look for view engine inside ejs in this file as root




// listen for requests( here we writing a response to a get req)
app.listen(3000);

// middleware:
app.use(express.static("public"));// whtever file u want to make accessible to browser
app.use(morgan('tiny'));


app.get('/',(req,res)=>{
const data=[
  {title:"shreya",description:"skdkdkdk"},
  {title:"sa",description:"skdkdkdk"},
]
res.render('index',{title:"Home",data});
});

app.get('/about',(req,res)=>{
  res.render('about',{title:"About"});
  // res.sendFile('./views/about.html',{root:__dirname}); 
  });

app.get("/blogs/create",(req,res)=>{
res.render('create',{title:"Create Blogs"});
})

// 404 pg should always be in end
app.use((req,res)=>{
  res.status(404).render('404',{title:"Error page"});
})
