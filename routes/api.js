const fs = require('fs');
const savedNote = require("../db/db.json");



module.exports = function (app) {
    app.get("/api/notes", function (req, res) {
        res.json(savedNote);
    });


    app.post("/api/notes", function (req, res) {
        savedNote.push(req.body);
        fs.writeFileSync("./db/db.json", JSON.stringify(savedNote))
        res.json(savedNote)

    });


    app.delete("/api/notes/:id", function (req, res) {
            savedNote.splice(req.params, 1);
            fs.writeFileSync("./db/db.json", JSON.stringify(savedNote))
            res.send();

    });


}