import express from "express";
import db from "../storage/connection.js";
import { upload } from "../middleware/uploadFile.js";

const router = express.Router();

router.get("/", (req, res) => {
  const queryGetCertificates = "SELECT * FROM ??";
  db.query(queryGetCertificates, ["certificates"], (err, result) => {
    if (err)
      return res.status(500).json({ message: "Internal server error 500!" });
    console.log(result);
    res.json({ data: result });
  });
});

router.post("/", upload.single("certification"), (req, res) => {
  const certification = "/upload/" + req.file.filename;
  const queryPostCertificates = "INSERT INTO ?? ( certification ) VALUES (?);";
  db.query(
    queryPostCertificates,
    ["certificates", certification],
    (err, result) => {
      if (err)
        return res.status(500).json({ message: "Internal server error 500!" });
      console.log(result);
      res.json({ data: result });
    }
  );
  console.log(certification);
});

export default router;
