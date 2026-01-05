import db from "../storage/connection.js";
import fs from "fs";
import path from "path";

export const getCertificates = (req, res) => {
  const queryGetCertificates = "SELECT * FROM ??";
  db.query(queryGetCertificates, ["certificates"], (err, result) => {
    if (err)
      return res.status(500).json({ message: "Internal server error 500!" });
    res.json({ data: result });
  });
};

export const postCertificate = (req, res) => {
  const certification = "/upload/" + req.file.filename;
  const queryPostCertificates = "INSERT INTO ?? ( certification ) VALUES (?);";
  db.query(
    queryPostCertificates,
    ["certificates", certification],
    (err, result) => {
      if (err)
        return res.status(500).json({ message: "Internal server error 500!" });
      res.json({ data: result });
    },
  );
};

export const deleteCertificate = (req, res) => {
  const id = req.params.id;
  const queryDeleteCertificate = "DELETE FROM ?? WHERE ?? = ?;";
  const queryOldCertificate = "SELECT ?? FROM ?? WHERE ?? = ?";

  db.query(
    queryOldCertificate,
    ["certification", "certificates", "id", id],
    (err, result) => {
      if (err) return res.json({ message: "Failed to get certificate!" });
      if (result.length <= 0)
        return res.status(404).json({ message: "Certificate not found!" });

      const oldCertificate = "app/storage" + result[0].certification;
      const relativePath = oldCertificate.startsWith("/")
        ? oldCertificate.substring(1)
        : oldCertificate;
      const absolutePath = path.join(process.cwd(), relativePath);
      // Mengecek apakah ada file path nya
      if (absolutePath) {
        // Menghapus gambar sebelumnya
        fs.unlink(absolutePath, (err) => {
          // Jika gagal menghapus mengirim respon error
          if (err) {
            console.log(err, "Failed to delete certificate!");
            return res.json({ message: "Failed to delete certificate!" });
          }
          db.query(
            queryDeleteCertificate,
            ["certificates", "id", id],
            (err, result) => {
              // Kalau gagal menghapus akan mengirim respon error
              if (err)
                return res.json({ message: "Internal server error 500!" });
              console.log("Certificate deleted successfully!");
              res.json({
                message: "Successfully deleted certificate!",
                data: result,
              });
            },
          );
        });
      }
    },
  );
};
