const express = require("express");

const router = express.Router();

// Controllers
const decisionControllers = require("./controllers/decisionControllers");
const userControllers = require("./controllers/userControllers");
const surveyControllers = require("./controllers/surveyControllers");
const authControllers = require("./controllers/authControllers");

// Validators
const { validateDecision, validateSurvey } = require("./services/validators");

// Hashing
const { hashPassword } = require("./services/passwordHelper");

// POST Routes
router.post("/login", authControllers.login);
router.post("/users", hashPassword, userControllers.addUser);
router.post("/decisions", validateDecision, decisionControllers.addDecision);
router.post("/surveys", validateSurvey, surveyControllers.addSurvey);

// GET Routes
router.get("/users", userControllers.getAllUsers);
router.get("/users/:id", userControllers.getOneUser);
router.get("/decisions", decisionControllers.getAllDecisions);
router.get("/decisions/:id", decisionControllers.getOneDecision);
router.get("/surveys", surveyControllers.getAllSurveys);
router.get("/surveys/:id", surveyControllers.getOneSurvey);

// GET Survey By Decision

router.get("/decisionSurvey", surveyControllers.getByDecision);

// GET Logout

router.get("/logout", authControllers.logoutController);

// PUT Routes
router.put(
  "/users/:id",

  userControllers.updateUser
);
router.put(
  "/decisions/:id",
  validateDecision,
  decisionControllers.updateDecision
);
router.put("/surveys/:id", validateSurvey, surveyControllers.updateSurvey);

// DELETE Routes
router.delete("/users/:id", userControllers.deleteUser);
router.delete("/decisions/:id", decisionControllers.deleteDecision);
router.delete("/surveys/:id", surveyControllers.deleteSurvey);

module.exports = router;
