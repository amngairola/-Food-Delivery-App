const express = require("express");
// const bodyParser = require("body-parser");
// const request = require("request");
const mongodb = require("./DB");
const app = express();
const port = 5000;

app.get("/", function (req, res) {
  res.send("hello");
});

app.listen(port, function () {
  console.log(`lestning port ${port}`);
});
mongodb();
