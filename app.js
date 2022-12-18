const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
// const { result } = require("lodash");
const Blog =require('./models/blog')

//express app
const app=express();
// connect to mongodb
const dbURI='mongodb+srv://shreyashet:shreyashet@cluster0.eqihaox.mongodb.net/node1?retryWrites=true&w=majority';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
 .then((result)=>{
  app.listen(3000); // listen to 3000 after connection is completed
})
.catch((err)=>{
  console.log(err)
})



// register view engine
app.set('view engine','ejs'); // look for view engine inside ejs in this file as root


//mongoose data get 
app.get('/add-blog',(req,res)=>{
  //creating new instance of Blog Schema
  const blog = new Blog({
    title:"1",
    snippet:"abc",
    body:"asdasdasd"
  })
  blog.save()
  .then((results)=>{
  res.send(results) //to the client
  })
  .catch((err)=>{
    console.log(err,"error on the way")
  })
})



// middleware:
app.use(express.static("public"));// whtever file u want to make accessible to browser
app.use(morgan('tiny'));


app.get('/',(req,res)=>{
res.redirect('/blogs')
});

app.get('/about',(req,res)=>{
  res.render('about',{title:"About"});
  // res.sendFile('./views/about.html',{root:__dirname}); 
  });
 
  //blogs routes:
  app.get('/blogs',(req,res)=>{
   Blog.find().sort({createdAt:-1})//desending order
   .then((result)=>{
     res.render('index',{title:"All Blogs",blogs:result}) // blogs is wht is mapped in index.js
   })
   .catch((error)=>{
      console.log(error,"erro")
   })
  })



app.get("/blogs/create",(req,res)=>{
res.render('create',{title:"Create Blogs"});
})

// 404 pg should always be in end
app.use((req,res)=>{
  res.status(404).render('404',{title:"Error page"});
})
