const models = require("../models");
const helper = require("../services/passwordHelper");
const { jwtGenerator } = require("../services/loginHelper");

function login(req, res) {
  const { email, password } = req.body;

  models.user
    .findOneByEmail(email)
    .then(async ([rows]) => {
      const user = rows[0];
      if (rows.length === 0) {
        res.sendStatus(404);
      }
      if (!(await helper.verifyPassword(user.password, password))) {
        console.warn(password);
        console.warn(user.password);
        res.status(401).json("Email or password is wrong");
      }
      const token = jwtGenerator(user.id);
      console.warn(token);
      delete user.password;
      res
        .cookie("token", token, {
          httpOnly: true,
        })
        .cookie("user", user, {
          httpOnly: false,
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
