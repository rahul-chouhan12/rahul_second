const express = require('express');
const router = express.Router();
const user = require("../controller/controller");

router.get("/createuser",user.createuser);

///post user data
router.post("/signup",user.signup); 

router.post("/login",user.login);


router.post("/delete",user.delete);


module.exports = router;