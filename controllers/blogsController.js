const Article = require("../models/articleSchema");

// MVS Variable function naming: blogs_create_get

const blogs_index_get  = (req, res) => {
    // res.render("index", { mytitle: "HOME" });
  
    // result = Array of objects inside mongo database
  
    Article.find()
      .then((result) => {
        res.render("index", { mytitle: "HOME", arrArticle: result });
      })
      .catch((err) => {
        console.log(err);
      });
    }
const blogs_post = (req, res) => {
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
    }
const blogs_details_get =  (req, res) => {
    // result =   object  inside mongo database
    
    Article.findById(req.params.id)
        .then((result) => {
        res.render("details", { mytitle: "ARTICLE DETAILS", objArticle: result });
        })
        .catch((err) => {
        console.log(err);
        });
    }
const blogs_delete = (req, res) => {
    Article.findByIdAndDelete(req.params.id)
    
        .then((params) => {
        res.json({ mylink: "/blogs" });
        })
    
        .catch((err) => {
        console.log(err);
        });
    }

module.exports = {blogs_index_get, blogs_post, blogs_details_get, blogs_delete} 