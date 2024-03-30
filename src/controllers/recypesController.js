const recypesModel = require("../models/recypeModel");

const getAll = async (req, res) => {
  const recypes = await recypesModel.getAll();
  return res.status(200).json(recypes);
};

const createRecype = async (req, res) => {
  const createdRecype = await recypesModel.createRecype(req.body);
  return res.status(201).json(createdRecype);
};

const deleteRecype = async (req, res) => {
  const { id } = req.params;

  await recypesModel.deleteRecype(id);
  return res.status(204).json();
};

const updateRecype = async (req, res) => {
  const { id } = req.params;

  await recypesModel.updateRecype(id, req.body);
  return res.status(204).json();
};

module.exports = {
  getAll,
  createRecype,
  deleteRecype,
  updateRecype,
};
