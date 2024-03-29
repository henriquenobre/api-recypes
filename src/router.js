const express = require("express");

const router = express.Router();

const tasksController = require("./controllers/tasksController");
const tasksMiddleware = require("./middlewares/tasksMiddleware");

router.get("/recypes", tasksController.getAll);
router.post(
  "/recypes",
  tasksMiddleware.validateFieldTitle,
  tasksController.createTask
);
router.delete("/recypes/:id", tasksController.deleteTask);
router.put(
  "/recypes/:id",
  tasksMiddleware.validateFieldTitle,
  tasksMiddleware.validateFieldStatus,
  tasksController.updateTask
);

module.exports = router;
