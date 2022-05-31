const express = require("express");
const router = express.Router();
const user = require("./controllers/userController");

router.get("/users", user.index);
router.get("/users/:id", user.show);
router.post("/user", user.store);
router.put("/user/:id", user.update);
router.delete("/user/:id", user.destroy);

module.exports = router;
