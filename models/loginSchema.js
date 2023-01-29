const mongoose = require("mongoose");


// define the Schema (the structure of the article)
const loginSchema = new mongoose.Schema(  {
  email: {type:String, required:true},
  password: {type:String, required:true},
  ipFormInput: String
  });

  // Create a model based on that schema
const Login = mongoose.model("Login", loginSchema);


// export the model
module.exports = Login;