const mongoose = require("mongoose");
const UserCredentialsSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Please enter your Email ID"],
      unique: "Email ID should be unique",
    },
    firstName: {
      type: String,
      index: true,
      trim: true,
    },
    lastName: {
      type: String,
      index: true,
      trim: true,
    },
    developerRoute: {
      type: String,
      trim: true,
    },
    developerPlan: {
      type: String,
      trim: true,
    },
    privacyPolicyAgreement: {
      type: String,
      trim: true,
    },
    team: {
      type: String,
      trim: true,
    },
    rollNo: {
      type: String,
      trim: true,
    },
    isFA: {
      type: Boolean,
    },
    pod: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserCredentialsSchema);

module.exports = { User };
