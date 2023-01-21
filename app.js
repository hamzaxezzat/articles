
const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs') // To write the name of the file directly and it will bring from "Views" File
app.use(express.static('public')) // To write file name directly not in path : like this <link rel="stylesheet" href="style.css">


{// For Auto reload views Folder
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

// Basic Load
app.get("/",(req,res)=>{
  res.send("Hello World")
})

// Render
app.get("/html",(req,res)=>{
  res.render("index")
})
// Render
app.get("/add-new-article",(req,res)=>{
  res.render("add-new-article")
})

// // Send File
// app.get("/html",(req,res)=>{
//   res.sendFile("/views/index.html",{root: __dirname}) //  {root: __dirname}: from root directory
// })

// Redirect()
app.get('/redirect', (req, res) => {
  res.redirect("/www.google.com")
})

// route
app.get('/contact', (req,res) => {
  res.send("Contact us")
})

// Status() - Error 404
app.use((req,res)=>{
  res.status(404).send("Error 404")
})>>>

// Run App
app.listen(port, () => {
  // console.log(`http://localhost:${port}`)
}) 
console.log(first)