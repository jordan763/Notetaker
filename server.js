const express = require("express");
const path = require("path")
const fs = require('fs');
const savedNote = require("./db/db.json");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"))

require("./routes/api")(app);
require("./routes/html")(app);

app.listen(PORT, function() {
    console.log(savedNote)
    console.log("App listening on PORT: " + PORT);
  });