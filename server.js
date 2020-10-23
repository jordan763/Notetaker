let express = require("express");
let path = require("path")
let fs = require('fs');

let app = express();
let PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/api")(app);
require("./routes/html")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });