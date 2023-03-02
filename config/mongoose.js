//require the library
const mongoose = require("mongoose");

//connect to the database
mongoose.connect("mongodb://127.0.0.1:27017/todo_app");

//acquire the connection( to check if it is successful)
const db = mongoose.connection;

//error handling
db.on("error", console.error.bind("Error connecting to db!"));

//up and running then print the message
db.once("open", function () {
  console.log("Successfully connected to database.");
});
