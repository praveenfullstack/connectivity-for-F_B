const express = require("express");
router=express.Router();
userRoutes=require("../controllers/UserControllers");
router.get("/" ,userRoutes.UserControllers);


module.exports=router;