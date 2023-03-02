const TodoApp = require("../models/todo");

module.exports.home = function (req, res) {
  const todoItems = async (req, res) => {
    try {
      const items = await TodoApp.find({});
      return res.render("home", {
        title: "Todo App",
        todo_items: items,
      });
    } catch (error) {
      console.log("Error in fetching contacts from db");
      return;
    }
  };
  todoItems(req, res);
};
