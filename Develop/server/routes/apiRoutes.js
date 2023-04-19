const { Router } = require("express");
const { v4: uuidv4 } = require("uuid");

const router = Router();

// your api routes
router.get("/notes", (req, res) => {
  // what you could return, replace the  <{ message: "hit" }> with the actual data from db.json
  return res.status(200).json({ message: "hit" });
});
router.post("/notes", (req, res) => {
  // building the new note
  const newNote = {
    id: uuidv4(),
    title: req.body.title,
    text: req.body.text,
  };
});

module.exports = router;