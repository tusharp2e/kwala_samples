require('dotenv').config({ path: '../../.env' });
const express = require("express");
const app = express();
const session = require("express-session");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use(session({ secret: "Secret_Key" }));
require("dotenv").config();

app.use(bodyParser.text());

app.use("/try", (req,res) => {
  console.log(req.body);
  res.send("working");
})

const server = app.listen(5001, () => {
  console.log("app is listening on port 5001");
});

module.exports = { server };
