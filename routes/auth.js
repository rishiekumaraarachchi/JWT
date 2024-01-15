const router = require("express").Router();
const { check, validationResult } = require("express-validator");
const { users } = require("../db");

router.post(
  "/signup",
  [
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Please enter a valid password").isLength({ min: 6 }),
  ],
  (req, res) => {
    const { password, email } = req.body;
    // validated the inputs
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() }); // 422: Unprocessable Entity
    }

    // check if user already exists
    let user = users.find((user) => {
      return user.email === email;
    });

    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }

    res.send("validation passed");
  }
);

module.exports = router;
