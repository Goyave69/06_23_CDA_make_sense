const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const userControllers = require("./controllers/userControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.get("/users", userControllers.getAllUsers);
router.get("/users/:id", userControllers.getOneUser);
// router.put("/users/:id", userControllers.updateUsers);
// router.post("/users", userControllers.addUsers);
router.delete("/users", userControllers.deleteUser);

module.exports = router;
