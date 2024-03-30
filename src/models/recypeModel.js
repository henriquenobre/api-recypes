const connection = require("./connection");

const getAll = async () => {
  const [recypes] = await connection.execute("SELECT * FROM recypes");
  return recypes;
};

const createRecype = async (recypes) => {
  const { title, ingredients, method } = recypes;

  const query =
    "INSERT INTO recypes(title, ingredients, method) VALUES (?, ?, ?)";

  const [createdTask] = await connection.execute(query, [
    title,
    ingredients,
    method,
  ]);
  return { insertId: createdTask.insertId };
};

const deleteRecype = async (id) => {
  const [removedRecype] = await connection.execute(
    "DELETE FROM recypes WHERE id = ?",
    [id]
  );
  return removedRecype;
};

const updateRecype = async (id, recype) => {
  const { title, ingredients, method } = recype;

  const query =
    "UPDATE tasks SET title = ?, ingredients = ?, method= ? WHERE id = ?";

  const [updatedRecype] = await connection.execute(query, [
    title,
    ingredients,
    method,
    id,
  ]);
  return updatedRecype;
};

module.exports = {
  getAll,
  createRecype,
  deleteRecype,
  updateRecype,
};
