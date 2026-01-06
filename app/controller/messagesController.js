import db from "../storage/connection.js";

export const getMessages = (req, res) => {
  const queryGetContact = "SELECT * FROM ?? LIMIT 7";
  db.query(queryGetContact, ["message"], (err, result) => {
    res.json(result);
    console.log(result);
  });
};

export const getMessageById = (req, res) => {
  const id = req.params.id;
  const queryGetMessageById = "SELECT * FROM ?? WHERE id = ?";
  db.query(queryGetMessageById, ["message", id], (err, result) => {
    if (err) res.status(500).json({ message: "Internal server error!" });
    console.log(result);
    res
      .status(200)
      .json({ message: "Successfully get message by id!", result });
  });
};

export const postMessage = (req, res) => {
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
    },
  );
};

export const deleteMessageById = (req, res) => {
  const id = req.params.id;
  const queryDeleteMessage = "DELETE FROM ?? WHERE id = ?";
  db.query(queryDeleteMessage, ["message", id], (err, result) => {
    if (err) res.status(500).json({ message: "Internal server error!" });
    res.status(200).json({ message: "Successfully deleted message!", result });
  });
};

export const updateMessageById = (req, res) => {
  const id = req.params.id;
  const username = req.body.username;
  const email = req.body.email;
  const message = req.body.message;
  const queryUpdateMessage =
    "UPDATE ?? SET username = ?, email = ?, message = ? WHERE id = ?";
  db.query(
    queryUpdateMessage,
    ["message", username, email, message, id],
    (err, result) => {
      if (err) res.status(500).json({ message: "Internal server error!" });
      res
        .status(200)
        .json({ message: "Successfully updated message!", result });
    },
  );
};
