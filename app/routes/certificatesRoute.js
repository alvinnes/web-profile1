import express from "express";
import { upload } from "../middleware/uploadFile.js";
import {
  getCertificates,
  postCertificate,
  deleteCertificate,
} from "../controller/certificatesController.js";

const router = express.Router();

router.get("/", getCertificates);
router.post("/", upload.single("certification"), postCertificate);
router.delete("/:id", deleteCertificate);

export default router;
