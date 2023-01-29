const express = require('express')
const router = express.Router()
const {blogs_index_get,blogs_post,blogs_details_get,blogs_delete } = require("../controllers/blogsController");

router.get("/", blogs_index_get);

// router.post("/", login_post);

router.post("/", blogs_post);



router.get("/:slug",blogs_details_get);


router.delete("/:id", blogs_delete);
  
module.exports = router;
