import express from "express";
import {
  deleteMessageById,
  getMessageById,
  getMessages,
  postMessage,
  updateMessageById,
} from "../controller/messagesController.js";
import { messageValidation } from "../validation/messageValidation.js";

const router = express.Router();

router.get("/", getMessages);
router.get("/:id", getMessageById);
router.post("/", messageValidation, postMessage);
router.delete("/:id", deleteMessageById);
router.patch("/:id", updateMessageById);

export default router;
