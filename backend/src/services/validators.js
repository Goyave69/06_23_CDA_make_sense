/* eslint-disable import/no-extraneous-dependencies */
const Joi = require("joi");

const userSchema = Joi.object({
  firstname: Joi.string().min(1).max(25).required(),
  lastname: Joi.string().min(1).max(25).required(),
  email: Joi.string().email().required(),
  age: Joi.number().min(0).max(150).required(),
  language: Joi.string().min(1).max(25).required(),
  hashedPassword: Joi.string(),
});

const decisionSchema = Joi.object({
  title: Joi.string().min(1).max(50).required(),
  deadline: Joi.date().format("YYYY-MM-DD"),
  decision_content: Joi.string().min(1).max(500).required(),
  organization_utility: Joi.string().min(1).required(),
  decision_context: Joi.string().min(1).max(500).required(),
  decision_benefits: Joi.string().min(1).max(500).required(),
  decision_risks: Joi.string().min(1).max(500).required(),
  progress_status: Joi.number().required(),
  in_conflict: Joi.boolean().required(),
});
