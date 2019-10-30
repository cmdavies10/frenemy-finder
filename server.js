var express = require("express");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 7500;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// insert routes

app.listen(PORT, function() {
    console.log(`Listening on PORT ${PORT}`);
})