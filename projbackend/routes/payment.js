const express = require("express")
const router = express.Router()

const {getToken, processpayment} = require("../controllers/payment")

const { isSignedIn, isAuthenticated } = require("../controllers/auth");

router.get("/payment/gettoken/:userId", isSignedIn, isAuthenticated, getToken)
router.post("/payment/braintree/:userId", isSignedIn, isAuthenticated, processpayment)

module.exports = router;