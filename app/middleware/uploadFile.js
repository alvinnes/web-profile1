import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "app/storage/upload");
  },
  filename: (req, file, cb) => {
    const filename = file.originalname
      .replace(/\.[^/.]+$/, "")
      .replace(/ /g, "-")
      .toUpperCase();
    const uniqeName = Date.now() + "-" + filename;
    const ext = file.mimetype.slice(6);
    cb(null, `${uniqeName}.${ext}`);
  },
});

export const upload = multer({ storage: storage });
