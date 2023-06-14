const express = require("express");

const router = express.Router();

const decisionControllers = require("./controllers/decisionControllers");
const userControllers = require("./controllers/userControllers");
const surveyControllers = require("./controllers/surveyControllers");
const {
  validateDecision,
  validateUser,
  validateSurvey,
} = require("./services/validators");

router.get("/decisions", decisionControllers.getAllDecisions);
router.get("/decisions/:id", decisionControllers.getOneDecision);
router.put(
  "/decisions/:id",
  validateDecision,
  decisionControllers.updateDecision
);
router.post("/decisions", validateDecision, decisionControllers.addDecision);
router.delete("/decisions/:id", decisionControllers.deleteDecision);

router.get("/users", userControllers.getAllUsers);
router.get("/users/:id", userControllers.getOneUser);
router.put("/users/:id", validateUser, userControllers.updateUser);
router.post("/users", validateUser, userControllers.addUser);
router.delete("/users/:id", userControllers.deleteUser);

router.get("/surveys", surveyControllers.getAllSurveys);
router.get("/surveys/:id", surveyControllers.getOneSurvey);
router.put("/surveys/:id", validateSurvey, surveyControllers.updateSurvey);
router.post("/surveys", validateSurvey, surveyControllers.addSurvey);
router.delete("/surveys/:id", surveyControllers.deleteSurvey);

module.exports = router;
