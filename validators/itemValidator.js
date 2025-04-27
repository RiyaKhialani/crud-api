const { body } = require("express-validator");

exports.validateItem = [
  body("name").notEmpty().withMessage("Name is required")
];
