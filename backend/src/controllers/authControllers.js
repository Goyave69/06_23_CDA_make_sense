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
        res.status(401).json("Email or password is wrong");
      }
      res.status(200).json({ token: jwtGenerator(rows[0].id) });
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
}

module.exports = { login };
