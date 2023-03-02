const TodoApp = require("../models/todo");

module.exports.deleteTask = function (req, res) {
  let id = req.query.id;

  const delete_task = async (req, res) => {
    try {
      const delTask = await TodoApp.findByIdAndDelete(id);
      return res.redirect("back");
    } catch (err) {
      console.log("Error in deleting an object from database");
      return;
    }
  };
  delete_task(req, res);
};
