import db from "../storage/connection.js";

export const getProjects = (req, res) => {
  const querySelectProjects = "SELECT * FROM ??";
  db.query(querySelectProjects, ["projects"], (err, result) => {
    res.json(result);
  });
};

export const postProjects = (req, res) => {
  const img = "/upload/" + req.file.filename;
  const title = req.body.title;
  const url = req.body.url;
  const description = req.body.description;
  const techs = req.body.techs.split(",").map((tech) => tech.trim());

  const queryPostProject =
    "INSERT INTO ?? (img,url,title,description,techs) VALUES (?,?,?,?,?)";
  db.query(
    queryPostProject,
    ["projects", img, url, title, description, JSON.stringify(techs)],
    (err, result) => {
      if (err) throw err;
      res.json(result);
    }
  );
};
