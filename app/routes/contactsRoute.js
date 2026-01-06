import express from "express";
import {
  deleteMessageById,
  getMessageById,
  getMessages,
  postMessage,
  updateMessageById,
} from "../controller/messagesController.js";

const router = express.Router();

router.get("/", getMessages);
router.get("/:id", getMessageById);
router.post("/", postMessage);
router.delete("/:id", deleteMessageById);
router.patch("/:id", updateMessageById);

export default router;
