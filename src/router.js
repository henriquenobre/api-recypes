const express = require("express");

const router = express.Router();

const recypesController = require("./controllers/recypesController");
const recypesMiddleware = require("./middlewares/recypesMiddleware");

router.get("/recypes", recypesController.getAll);
router.post(
  "/recypes",
  recypesMiddleware.validateFieldTitle,
  recypesController.createRecype
);
router.delete("/recypes/:id", recypesController.deleteRecype);
router.put(
  "/recypes/:id",
  recypesMiddleware.validateFieldTitle,
  recypesMiddleware.validateFieldStatus,
  recypesController.updateRecype
);

module.exports = router;
