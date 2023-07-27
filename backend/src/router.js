const express = require("express");

const app = express();
const router = express.Router();
const cors = require("cors");

// Controllers
const decisionControllers = require("./controllers/decisionControllers");
const userControllers = require("./controllers/userControllers");
const surveyControllers = require("./controllers/surveyControllers");
const loginController = require("./controllers/authControllers");

// Validators
const {
  validateDecision,
  // validateUser,
  validateSurvey,
  putValidateUser,
  putValidateDecision,
} = require("./services/validators");

// Hashing
const { hashPassword } = require("./services/passwordHelper");
// const securityMiddleware = require("./middleware/loginMiddleware");

// CORS

app.use(cors);

// POST Routes
router.post("/login", loginController.login);
router.post("/users", hashPassword, userControllers.addUser);
router.post("/decisions", validateDecision, decisionControllers.addDecision);
router.post("/surveys", validateSurvey, surveyControllers.addSurvey);

// GET Routes

router.get("/getcookie", (req, res) => {
  res.send(req.cookies);
});

router.get("/users", userControllers.getAllUsers);
router.get("/users/:id", userControllers.getOneUser);
router.get("/decisions", decisionControllers.getAllDecisions);
router.get("/decisions/:id", decisionControllers.getOneDecision);
router.get("/surveys", surveyControllers.getAllSurveys);
router.get("/surveys/:id", surveyControllers.getOneSurvey);

// GET Survey By Decision

router.get("/decisionSurvey/:id", surveyControllers.getByDecision);

// PUT Routes
router.put("/users/:id", putValidateUser, userControllers.updateUser);
router.put(
  "/decisions/:id",
  putValidateDecision,
  decisionControllers.updateDecision
);
router.put("/surveys/:id", validateSurvey, surveyControllers.updateSurvey);

// DELETE Routes
router.delete("/users/:id", userControllers.deleteUser);
router.delete("/decisions/:id", decisionControllers.deleteDecision);
router.delete("/surveys/:id", surveyControllers.deleteSurvey);

module.exports = router;
