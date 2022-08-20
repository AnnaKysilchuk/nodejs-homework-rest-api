const { Schema, model } = require("mongoose");
const Joi = require('joi');

const emailRegexp = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

const signupSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});

const schemas = {
  signup: signupSchema,
  login: signupSchema,
};

const userSchema = new Schema(
  {
    password: {
      type: String,
      minlength: 6,
      required: [true, 'Set password for user'],
    },
    email: {
      type: String,
      match: emailRegexp,
      required: [true, 'Email is required'],
      unique: true,
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter"
    },
    avatarURL: {
      type: String,
      required: true,
    },
    token: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true }
);

const User = model("user", userSchema);

module.exports = {User, schemas};