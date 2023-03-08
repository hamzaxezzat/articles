const express = require('express')
const router = express.Router()
// const {blogs_index_get,blogs_post,blogs_details_get,blogs_delete,login_post,login_get } = require("../controllers/blogsController");
const {blogs_index_get,blogs_post,blogs_details_get,blogs_delete } = require("../controllers/blogsController");

router.get("/", blogs_index_get);

// router.post("/login", login_post);
  
// router.get("/login", login_get);

router.post("/", blogs_post);



router.get("/:slug",blogs_details_get);


router.delete("/:id", blogs_delete);
  
module.exports = router;
