const db = require('../models/models');

const todoController = {};

/**
 * Authors: Adrian-Inza Cruz, Taylor Davis
 * Todo Controller
 * Handles adding todos
 */

todoController.postTodo = (req, res, next) => {
  console.log('postTodo');
  const {
    companyName, todo
  } = req.body;

  const values = [companyName, todo];

  const inputTodo = `INSERT INTO TODO(company_name_fk, todo)
  VALUES ($1, $2) RETURNING *`;

  db.query(inputTodo, values)
    .then((response) => {
      res.locals.todo = response.rows[0];
      return next();
    })
    .catch((err) => {
      console.log(err);
      return next(err);
    });
};

module.exports = todoController;