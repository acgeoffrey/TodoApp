const express = require("express");
const app = express();
const port = 8000;

const db = require("./config/mongoose");
const TodoApp = require("./models/todo");

app.use(express.urlencoded());

//use express router
app.use("/", require("./routers"));

//setup the view engine
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("assets"));

app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server: ${err}`);
  }
  console.log(`Server is up and running on port: ${port}`);
});
