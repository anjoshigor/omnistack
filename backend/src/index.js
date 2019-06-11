const express = require("express");
const mongoose = require("mongoose");
const app = express();
const routes = require("./routes");

mongoose.connect(
  "mongodb+srv://omni:omni@cluster0-h7g5o.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true
  }
);

app.use(routes);

app.listen(3333);
