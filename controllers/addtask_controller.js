const TodoApp = require("../models/todo");

module.exports.addTask = function (req, res) {
  const add_task = async (req, res) => {
    try {
      const newTodo = await TodoApp.create(req.body);
      console.log("***", newTodo);
      res.redirect("back");
    } catch (error) {
      console.error(error);
    }
  };
  add_task(req, res);
};
