const express = require("express")
const router = express.Router()
const { auth, isNGOSUPPORT } = require("../middlewares/auth")
const {
  deleteAccount,
  updateProfile,
  getAllUserDetails,
  updateDisplayPicture,
  getEnrolledCourses,
  NGOSUPPORTDashboard,
} = require("../controllers/Profile")

router.delete("/deleteProfile", auth, deleteAccount)
router.put("/updateProfile", auth, updateProfile)
router.get("/getUserDetails", auth, getAllUserDetails)
router.get("/getEnrolledCourses", auth, getEnrolledCourses)
router.put("/updateDisplayPicture", auth, updateDisplayPicture)
router.get("/NGOSUPPORTDashboard", auth, isNGOSUPPORT, NGOSUPPORTDashboard)

module.exports = router