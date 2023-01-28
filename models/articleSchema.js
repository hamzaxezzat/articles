const mongoose = require("mongoose");
const {marked} = require('marked')
const slugify = require('slugify')
const createDomPurify = require('dompurify')
const { JSDOM } = require('jsdom')
const dompurify = createDomPurify(new JSDOM().window)

// define the Schema (the structure of the article)
const articleSchema = new mongoose.Schema(  {

  title: {type:String, required:true},
  summary: {type:String, required:true},
  body: {type:String, required:true},
  category:{type:String, required:true},
  image: {type:String, required:false},
  slug: {type:String, required:true},
  date: {type:Date, default:Date.now},
  sanitizedHtml:{type:String,required:true}

  });

  articleSchema.pre('validate',function(next){
    if (this.title){
      this.slug = slugify(this.title,{lower:true, strict:true})
    }
    if(this.body){
      this.sanitizedHtml = dompurify.sanitize(marked(this.body))
    }
    next()
  })

  // Create a model based on that schema
const Article = mongoose.model("Article", articleSchema);
  


// export the model
module.exports = Article;