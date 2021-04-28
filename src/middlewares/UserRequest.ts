import { check, oneOf, validationResult } from "express-validator";

export const loginRules = oneOf([
  check("email").exists().withMessage("Title is required"),
  check("password").exists().withMessage("Category is required"),
]);
