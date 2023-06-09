const { Router } = require("express");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const router = Router();

// your api routes
router.get("/notes", (req, res) => {
  // what you could return, replace the  <{ message: "hit" }> with the actual data from db.json

  let notes = JSON.parse(fs.readFileSync("./db/db.json"));

  res.json(notes);
});

router.post("/notes", (req, res) => {
  let db = fs.readFileSync("./db/db.json");
  db = JSON.parse(db);

  // building the new note
  const newNote = {
    id: uuidv4(),
    title: req.body.title,
    text: req.body.text,
  };
  console.log(newNote);

  db.push(newNote);
  fs.writeFileSync("./db/db.json", JSON.stringify(db));
  res.json(db);
});
// router.delete("/notes/:id", (req, res) => {
//   let db = JSON.parse(fs.readFileSync("./db/db.json"));
//   let tempdb = []
//   for(let i =0;i<db.length;i++){
//     if(db[i].id != req.params.id){
//         tempdb.push(db[i])
//     }
//   }
//   db = tempdb
//    fs.writeFileSync("./db/db.json", JSON.stringify(tempdb),function(err)
//       else(err) throw err;
//     }
// );
module.exports = router;
