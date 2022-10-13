const express = require("express");
const app = express();

app.use(express.json())


//Route Imports
const prodcut = require("./routes/productRoute");


app.use("/api/v1",prodcut);


module.exports = app
