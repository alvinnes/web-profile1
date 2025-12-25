import express from "express";
import "dotenv/config";
import cors from "cors";
import path from "path";
import projectsRoute from "./routes/projectsRoute.js";
import contactRoute from "./routes/contactsRoute.js";
import certificatesRoute from "./routes/certificatesRoute.js";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(
  "/upload",
  express.static(path.join(process.cwd(), "app/storage/upload"))
);
app.use("/api/v1/projects", projectsRoute);
app.use("/api/v1/contacts", contactRoute);
app.use("/api/v1/certificates", certificatesRoute);

app.listen(PORT, (err) => {
  if (err) {
    console.log("Error at running express! ", err);
  }
  console.log("Server running on port ", PORT);
});
