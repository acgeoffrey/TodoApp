const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home_controller");
const addtaskController = require("../controllers/addtask_controller");
const deletetaskController = require("../controllers/deletetask_controller");

console.log("Router is loaded");

router.get("/", homeController.home);
router.post("/add-task", addtaskController.addTask);
router.get("/delete-task", deletetaskController.deleteTask);

module.exports = router;
