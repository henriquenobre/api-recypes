const express = require("express");

const router = express.Router();

const recypesController = require("./controllers/recypesController");
const recypesMiddleware = require("./middlewares/recypesMiddleware");

router.get("/recypes", recypesController.getAll);
router.post(
  "/recypes",
  recypesMiddleware.validateFieldTitle,
  recypesController.createTask
);
router.delete("/recypes/:id", recypesController.deleteTask);
router.put(
  "/recypes/:id",
  recypesMiddleware.validateFieldTitle,
  recypesMiddleware.validateFieldStatus,
  recypesController.updateTask
);

module.exports = router;
