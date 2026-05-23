import { body } from "express-validator";
import sanitizeHtml from "sanitize-html";

export const messageValidation = [
  body("username")
    .trim()
    .notEmpty()
    .withMessage("Username is required!")
    .isLength({ min: 3 })
    .withMessage("Username must be at least 3 characters long!")
    .customSanitizer((value) => {
      return sanitizeHtml(value, {
        allowedTags: [],
        allowedAttributes: {},
      });
    }),
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required!")
    .isEmail()
    .withMessage("Email is invalid!")
    .normalizeEmail({
      gmail_remove_dots: true,
      gmail_remove_subaddress: true,
      gmail_convert_googlemaildotcom: true,
      outlookdotcom_lowercase: true,
    }),
  body("message").trim().notEmpty().withMessage("Message is required!"),
];
