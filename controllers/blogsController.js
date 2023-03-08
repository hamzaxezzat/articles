const Article = require("../models/articleSchema");
const Login = require("../models/loginSchema");

// MVS Variable function naming: blogs_create_get
const first_post = (req,res)=>{
    Article.firs
}
const blogs_index_get  = (req, res) => {
    // result = Array of objects inside mongo database
  
    Article.find().sort({date:'desc'})
      .then((result) => {
        res.render("index", { mytitle: "HOME", arrArticle: result });
      })
      .catch((err) => {
        console.log(err);
      });
    }

// const login_get = (req, res) => {
//     res.render("login");
// }

const login_post = (req, res) => {
    const login = new Login(req.body);    
    login
        .save()
        .then((result) => {
        res.redirect("login");
        })
        .catch((err) => {
        console.log(err);
        });
}


const blogs_post = (req, res) => {
    const article = new Article(req.body);    
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
    Article.findByIdAndRemove(req.params.id)
    
        .then((params) => {
        res.json({ mylink: "/blogs" });
        })
    
        .catch((err) => {
        console.log(err);
        });
    }

// module.exports = {blogs_index_get, blogs_post, blogs_details_get, blogs_delete,login_post ,login_get} 
module.exports = {blogs_index_get, blogs_post, blogs_details_get, blogs_delete,login_post} 