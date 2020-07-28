const express = require("express");
const router = express.Router();
const User = require("../models/user")

const {getUserById, getUser, updateUser, userPurchaseList} = require("../controllers/user")
const {isSignedIn,isAuthenticated,isAdmin} = require("../controllers/auth");
const user = require("../models/user");
const { update } = require("../models/user");

router.param("userId", getUserById)

router.get("/user/:userId", isSignedIn, isAuthenticated, getUser);

//This route is used to visit all the users present in the database. This is secret route
router.get("/showuser", (req,res)=>{
    User.find().exec((err,users)=>{
        if(err || !users){
            return res.status(400).json({
                error:"No users found!"
            });
        }
        res.json(users)
    })
});

router.put("/user/:userId", isSignedIn, isAuthenticated, updateUser)
router.get("/orders/user/:userId", isSignedIn, isAuthenticated, userPurchaseList)

module.exports = router