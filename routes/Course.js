
const express = require("express")
const router = express.Router()
const {
  createCourse,
  getAllCourses,
  getCourseDetails,
  getFullCourseDetails,
  editCourse,
  getNGOSUPPORTCourses,
  deleteCourse,
} = require("../controllers/Course")


const {
  showAllCategories,
  createCategory,
  categoryPageDetails,
} = require("../controllers/Category")

const {
  createSection,
  updateSection,
  deleteSection,
} = require("../controllers/Section")

const {
  createSubSection,
  updateSubSection,
  deleteSubSection,
} = require("../controllers/Subsection")


const {
  createRating,
  getAverageRating,
  getAllRating,
} = require("../controllers/RatingAndReview")

const {
  updateCourseProgress
} = require("../controllers/courseProgress");


const { auth, isNGOSUPPORT, isSINGLEMOTHER, isAdmin } = require("../middlewares/auth")
router.post("/createCourse", auth, isNGOSUPPORT, createCourse)

router.post("/addSection", auth, isNGOSUPPORT, createSection)

router.post("/updateSection", auth, isNGOSUPPORT, updateSection)

router.post("/deleteSection", auth, isNGOSUPPORT, deleteSection)

router.post("/updateSubSection", auth, isNGOSUPPORT, updateSubSection)

router.post("/deleteSubSection", auth, isNGOSUPPORT, deleteSubSection)

router.post("/addSubSection", auth, isNGOSUPPORT, createSubSection)

router.get("/getAllCourses", getAllCourses)

router.post("/getCourseDetails", getCourseDetails)

router.post("/getFullCourseDetails", auth, getFullCourseDetails)

router.post("/editCourse", auth, isNGOSUPPORT, editCourse)

router.get("/getNGOSUPPORTCourses", auth, isNGOSUPPORT, getNGOSUPPORTCourses)

router.delete("/deleteCourse", deleteCourse)

router.post("/updateCourseProgress", auth, isSINGLEMOTHER, updateCourseProgress);

router.post("/createCategory", auth, isNGOSUPPORT, createCategory)
router.get("/showAllCategories", showAllCategories)
router.post("/getCategoryPageDetails", categoryPageDetails)
router.post("/createRating", auth, isSINGLEMOTHER, createRating)
router.get("/getAverageRating", getAverageRating)
router.get("/getReviews", getAllRating)

module.exports = router