
//  to controll ur website

const express = require("express");
const helmet = require("helmet");
const app = express();
const port = 5050;
const blogs = require ('./routes/blogs')
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
// app.use(helmet());


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
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
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


//  404
app.use((req, res) => {
  res.status(404).send("Sorry can't find that!");
});
