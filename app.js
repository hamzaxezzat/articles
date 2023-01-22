// Configration 
const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose');
const Article = require("./models/articleSchema");

// To not console undefiend
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs') // To write the name of the file directly and it will bring from "Views" File
app.use(express.static('public')) // To write file name directly not in path : like this <link rel="stylesheet" href="style.css">

 
{ // mogoose Connection DB
mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://hamzaezzat:bofdec-boNryp-1vujfu@cluster0.p5ibkbv.mongodb.net/alldata?retryWrites=true&w=majority")
  .then( result => {
    app.listen(port, () => { }) 
  })
  .catch( err => {
    console.log(err);
  }); 
}

{// For Auto reload "views" Folder
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public')); 
const connectLivereload = require("connect-livereload");
app.use(connectLivereload());
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
}); 
// End of Auto reload views Folder
}

// Render
app.get("/",(req,res)=>{
  res.render("index",{pageTitle:"Blogs"})
})

// add-new-article Page
app.get("/add-new-article",(req,res)=>{
  res.render("add-new-article")
})

// POST new Article 
app.post('/',(req,res)=>{
  const article = new Article(req.body) 
  console.log(req.body)

  article
    .save()
    .then(res.render("index"))
    .catch()


})

// Status() - Error 404
app.use((req,res)=>{
  res.status(404).render("index")
})







// {// learning
//   // Basic Load
//   app.get("/",(req,res)=>{
//     res.send("Hello World")
//   })

//   // // Send File
//   // app.get("/html",(req,res)=>{
//   //   res.sendFile("/views/index.html",{root: __dirname}) //  {root: __dirname}: from root directory
//   // })

//   // Redirect()
//   app.get('/redirect', (req, res) => {
//     res.redirect("/www.google.com")
//   })

//   // route
//   app.get('/contact', (req,res) => {
//     res.send("Contact us")
//   })
// }
