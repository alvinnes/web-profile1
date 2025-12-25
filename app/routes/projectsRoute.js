import express from "express";
import { getProjects, postProjects } from "../controller/projectsController.js";
import { upload } from "../middleware/uploadFile.js";
const router = express.Router();

router.get("/", getProjects);
router.post("/", upload.single("img"), postProjects);

export default router;
