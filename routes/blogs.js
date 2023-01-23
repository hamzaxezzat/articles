const express = require('express')
const router = express.Router()
const Article = require("../models/articleSchema");


router.get("/", (req, res) => {
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

router.post("/", (req, res) => {
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

router.get("/:id", (req, res) => {
// result =   object  inside mongo database

Article.findById(req.params.id)
    .then((result) => {
    res.render("details", { mytitle: "ARTICLE DETAILS", objArticle: result });
    })
    .catch((err) => {
    console.log(err);
    });
});
// Can't use redirect becauee "app.delete" refuse "res.redirect" method
router.delete("/:id", (req, res) => {
Article.findByIdAndDelete(req.params.id)

    .then((params) => {
    res.json({ mylink: "/blogs" });
    })

    .catch((err) => {
    console.log(err);
    });
});
  
module.exports = router;
