const mongoose = require("mongoose");

// Defined schema
const skillSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      maxlength: 50,
      trim: true,
    },
    requirement: {
      type: String,
      require: true,
      maxlength: 100,
      trim: true,
    },
    rank: {
      type: String,
      require: true,
      maxlength: 10,
      trim: true,
    },
  },
  { timestamps: true }
);

// Created a Model for our collection in database.
const SkillModel = mongoose.model("Skill", skillSchema);

module.exports.SkillModel = SkillModel;
