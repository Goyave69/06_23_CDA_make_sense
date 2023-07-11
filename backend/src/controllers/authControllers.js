const models = require("../models");
const helper = require("../services/passwordHelper");
const { jwtGenerator } = require("../services/loginHelper");

function login(req, res) {
  const { email, password } = req.body;

  models.user
    .findOneByEmail(email)
    .then(async ([rows]) => {
      if (rows.length === 0) {
        res.sendStatus(404);
      }
      if (!(await helper.verifyPassword(rows[0].password, password))) {
        console.warn(password);
        console.warn(rows[0].password);
        res.status(401).json("Email or password is wrong");
      }
      const token = jwtGenerator(rows[0].id);
      console.warn(token);
      res
        .cookie("token", token, {
          httpOnly: true,
        })
        .status(200)
        .json({ message: "Login successful" });
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
}

async function logoutController(req, res) {
  return res.clearCookie("token").status(200).json("Successfully logged out");
}

module.exports = { login, logoutController };
