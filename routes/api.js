const savedNote = require("../db/db.json");
const express = require("express");
const path = require("path");
const fs = require('fs');


module.exports = function(app) {
    app.get("/api/notes", function (req, res) {
        res.json(savedNote);
    });
    
    
    app.post("/api/notes", function (req, res) {
        savedNote.push(req.body);
        fs.writeFileSync("../db/db.json", JSON.stringify(savedNote))
        res.json(savedNote)

    });
    

    // const dataBuffer = fs.readFileSync('db.json');
    // const dataJSON = dataBuffer.toString();
    // const data = JSON.parse(dataJSON);
    // console.log(data.title);

}