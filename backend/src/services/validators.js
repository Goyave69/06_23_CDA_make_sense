/* eslint-disable camelcase */
/* eslint-disable import/no-extraneous-dependencies */
const Joi = require("joi");

const { joiPasswordExtendCore } = require("joi-password");

const joiPassword = Joi.extend(joiPasswordExtendCore);

const userSchema = Joi.object({
  firstname: Joi.string().min(1).max(25).required(),
  lastname: Joi.string().min(1).max(25).required(),
  email: Joi.string().email().required(),
  password: joiPassword
    .string()
    .minOfSpecialCharacters(2)
    .minOfLowercase(2)
    .minOfUppercase(2)
    .minOfNumeric(2)
    .noWhiteSpaces()
    .onlyLatinCharacters()
    .required(),
  birthdate: Joi.date().required(),
  role: Joi.object()
    .pattern(/./, Joi.string().valid("user", "admin", "expert"))
    .required(),
});

const decisionSchema = Joi.object({
  title: Joi.string().min(1).max(50).required(),
  deadline: Joi.date().required(),
  decision_content: Joi.string().min(1).required(),
  organization_utility: Joi.string().min(1).required(),
  decision_context: Joi.string().min(1).required(),
  decision_benefits: Joi.string().min(1).required(),
  decision_risks: Joi.string().min(1).required(),
  progress_status: Joi.number().required(),
  in_conflict: Joi.boolean().required(),
});

const surveySchema = Joi.object({
  comment_content: Joi.string().min(1).required(),
});

const validateUser = (req, res, next) => {
  const { firstname, lastname, email, password, birthdate, role } = req.body;

  const { error } = userSchema.validate(
    { firstname, lastname, email, password, birthdate, role },
    { abortEarly: false }
  );

  if (error) {
    res.status(422).json({ validationErrors: error.details });
  } else {
    next();
  }
};

const validateDecision = (req, res, next) => {
  const {
    title,
    deadline,
    decision_content,
    organization_utility,
    decision_context,
    decision_benefits,
    decision_risks,
    progress_status,
    in_conflict,
  } = req.body;

  const { error } = decisionSchema.validate(
    {
      title,
      deadline,
      decision_content,
      organization_utility,
      decision_context,
      decision_benefits,
      decision_risks,
      progress_status,
      in_conflict,
    },
    { abortEarly: false }
  );

  if (error) {
    res.status(422).json({ validationErrors: error.details });
  } else {
    next();
  }
};

const validateSurvey = (req, res, next) => {
  const { comment_content } = req.body;

  const { error } = surveySchema.validate(
    { comment_content },
    { abortEarly: false }
  );

  if (error) {
    res.status(422).json({ validationErrors: error.details });
  } else {
    next();
  }
};

module.exports = {
  validateUser,
  validateDecision,
  validateSurvey,
};
