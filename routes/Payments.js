
const express = require("express")
const router = express.Router()

const { capturePayment, verifyPayment, sendPaymentSuccessEmail } = require("../controllers/Payments")
const { auth, isNGOSUPPORT, isSINGLEMOTHER, isAdmin } = require("../middlewares/auth")
router.post("/capturePayment", auth, isSINGLEMOTHER, capturePayment)
router.post("/verifyPayment",auth, isSINGLEMOTHER, verifyPayment)
router.post("/sendPaymentSuccessEmail", auth, isSINGLEMOTHER, sendPaymentSuccessEmail);

module.exports = router