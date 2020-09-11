const express = require("express");
const router = express.Router();
const Joi = require("joi");
const { CourseModel } = require("../models/course");
const checkAuth = require('../middlewares/auth');

// All courses
router.get("/",checkAuth, async (req, res) => {
  const courses = await CourseModel.find();
  res.json({
    success: true,
    user: req.currentUser,
    data: courses,
  });
});

// Single course using route params.
router.get("/:id", async (req, res) => {
  const course = await CourseModel.findOne({ _id: req.params.id });
  res.json({ success: true, data: course });
});

// Save course
router.post("/", async (req, res) => {
  const { error } = validateCourse(req);
  if (error) {
    return res.json({
      success: false,
      data: error["details"][0].message,
    });
  }
  console.log(error);

  const course = new CourseModel({
    name: req.body.name,
    author: req.body.author,
  });

  const result = await course.save();
  res.json({
    success: true,
    data: result,
  });
});

// Update the course.
router.put("/:id", async (req, res) => {
  const course = await CourseModel.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        name: req.body.name,
        author: req.body.author,
      },
    },
    { new: true }
  );

  res.json({
    success: true,
    data: course,
  });
});

router.delete("/:id", async (req, res) => {
  const course = await CourseModel.findByIdAndRemove(req.params.id);
  if (course) {
    res.json({
      success: true,
      message: "Record has been deleted.",
    });
  } else {
    res.json({
      success: true,
      message: "No course found.",
    });
  }
});

function validateCourse(req) {
  const schema = Joi.object({
    name: Joi.string().required().max(50),
    author: Joi.string().required().max(50),
  });

  return schema.validate(req.body);
}

module.exports = router;
