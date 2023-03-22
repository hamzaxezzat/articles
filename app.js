
//  to controll ur website
const login_post = require("./controllers/blogsController")
const login_get = require("./controllers/blogsController")
const express = require("express");
const app = express();
const port = 5050;
const blogs = require ('./routes/blogs')
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
const Login = require("./models/loginSchema");


// for auto refresh
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, "public"));

const connectLivereload = require("connect-livereload");
app.use(connectLivereload());

liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

// mongoose
const mongoose = require("mongoose");
mongoose.set('strictQuery', false)

mongoose
  .connect(
    "mongodb+srv://hamzaezzat:bofdec-boNryp-1vujfu@cluster0.p5ibkbv.mongodb.net/alldata?retryWrites=true&w=majority"
  )
  .then((result) => {
    app.listen(process.env.PORT  || port, () => {
      console.log("Example app listening at http://localhost:5050");
    });
  })

  .catch((err) => {
    console.log(err);
  });


app.get("/", (req, res) => {
  res.redirect("/blogs");
});

// Bloooogssss Code
app.use('/blogs', blogs)


app.get("/add-new-article", (req, res) => {
  res.render("add-new-article", { mytitle: "create new article" ,});
});
app.get("/signup", (req, res) => {
  res.render("signup");
});

app.post("/login", (req,res)=>{
  const login = new Login(req.body);    
  login
      .save()
      .then((result) => {
        console.log(req.body)
        console.log(result)
      res.redirect("login");
      })
      .catch((err) => {
      console.log(err);
      });
});
  
app.get("/login",(req,res)=>{
  res.render("login")
} );


//  404
app.use((req, res) => {
  res.status(404).send("Sorry can't find that!");
});
