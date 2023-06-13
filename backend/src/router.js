const express = require("express");

const router = express.Router();

const decisionControllers = require("./controllers/decisionControllers");
const userControllers = require("./controllers/userControllers");
const surveyControllers = require("./controllers/surveyControllers");

router.get("/decisions", decisionControllers.getAllDecisions);
router.get("/decisions/:id", decisionControllers.getOneDecision);
router.put("/decisions/:id", decisionControllers.updateDecision);
router.post("/decisions", decisionControllers.addDecision);
router.delete("/decisions/:id", decisionControllers.deleteDecision);

router.get("/users", userControllers.getAllUsers);
router.get("/users/:id", userControllers.getOneUser);
router.put("/users/:id", userControllers.updateUser);
router.post("/users", userControllers.addUser);
router.delete("/users/:id", userControllers.deleteUser);

router.get("/surveys", surveyControllers.getAllSurveys);
router.get("/surveys/:id", surveyControllers.getOneSurvey);
router.put("/surveys/:id", surveyControllers.updateSurvey);
router.post("/surveys", surveyControllers.addSurvey);
router.delete("/surveys/:id", surveyControllers.deleteSurvey);

module.exports = router;
