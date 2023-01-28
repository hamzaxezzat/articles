const Article = require("../models/articleSchema");

// MVS Variable function naming: blogs_create_get

const blogs_index_get  = (req, res) => {
    // res.render("index", { mytitle: "HOME" });
  
    // result = Array of objects inside mongo database
  
    Article.find().sort({date:'desc'})
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
    
    
    Article.findOne({slug:req.params.slug})
        .then((result) => {
            
            if (result == null) res.redirect('/') // if the article not exist return to home page
            res.render("details", { mytitle: "ARTICLE DETAILS", objArticle: result });
        })
        .catch((err) => {
        console.log(err);
        });
    }
const blogs_delete = (req, res) => {
    // Article.findOneAndDelete({slug:req.params.id})
    // Article.findOneAndDelete({slug:req.params.slug})
    Article.findByIdAndRemove(req.params.id)
    
        .then((params) => {
        res.json({ mylink: "/blogs" });
        })
    
        .catch((err) => {
        console.log(err);
        });
    }

module.exports = {blogs_index_get, blogs_post, blogs_details_get, blogs_delete} 