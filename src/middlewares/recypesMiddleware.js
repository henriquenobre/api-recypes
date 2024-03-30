const validateFieldTitle = (request, response, next) => {
  const { body } = request;

  if (
    body.title === undefined ||
    body.ingredients === undefined ||
    body.method === undefined
  ) {
    return response
      .status(400)
      .json({ message: "The fields 'title, ingredients, method' is required" });
  }

  if (body.title === "" || body.ingredients === "" || body.method === "") {
    return response.status(400).json({ message: "fields cannot be empty" });
  }

  next();
};

const validateFieldStatus = (request, response, next) => {
  const { body } = request;

  if (body.status === undefined) {
    return response
      .status(400)
      .json({ message: "The field 'status' is required" });
  }

  if (body.status === "") {
    return response.status(400).json({ message: "status cannot be empty" });
  }

  next();
};

module.exports = {
  validateFieldStatus,
  validateFieldTitle,
};
