let savedNotes = require("../data/notes");


module.exports = function(app) {
    app.get("/api/notes", function (req, res) {
        res.json(notes);
    });
    
    
    app.post("/api/notes", function (req, res) {
        savedNotes.push(req.body);
        res.json()
    });
    


}