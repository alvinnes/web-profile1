import express from "express";
import db from "../storage/connection.js";

const router = express.Router();

router.get("/", (req, res) => {
  const queryGetContact = "SELECT * FROM ??";
  db.query(queryGetContact, ["message"], (err, result) => {
    res.json(result);
    console.log(result);
  });
});

router.post("/", (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const message = req.body.message;
  const queryPostContact =
    "INSERT INTO ?? (username, email, message) VALUES (?, ?, ?)";
  db.query(
    queryPostContact,
    ["message", username, email, message],
    (err, result) => {
      if (err) res.status(500).json({ message: "Internal server error!" });
      res.status(200).json(result);
    }
  );
});

export default router;
