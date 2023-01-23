//  to controll ur website

const express = require("express");
const app = express();
const port = 5050;
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
const Article = require("./models/articleSchema");

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

app.get("/blogs", (req, res) => {
  // res.render("index", { mytitle: "HOME" });

  // result = Array of objects inside mongo database

  Article.find()
    .then((result) => {
      res.render("index", { mytitle: "HOME", arrArticle: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/add-new-article", (req, res) => {
  res.render("add-new-article", { mytitle: "create new article" });
});

app.post("/blogs", (req, res) => {
  const article = new Article(req.body);

  // console.log(req.body)

  article
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/blogs/:id", (req, res) => {
  // result =   object  inside mongo database

  Article.findById(req.params.id)
    .then((result) => {
      res.render("details", { mytitle: "ARTICLE DETAILS", objArticle: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.delete("/blogs/:id", (req, res) => {
  Article.findByIdAndDelete(req.params.id)

    .then((params) => {
      res.json({ mylink: "/blogs" });
    })

    .catch((err) => {
      console.log(err);
    });
});

//  404
app.use((req, res) => {
  res.status(404).send("Sorry can't find that!");
});
