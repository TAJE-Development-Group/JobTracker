const db = require('../models/models');

const contactsController = {};

/**
 * Authors: Adrian Inza-Cruz Taylor Davis
 * Contact Controller
 * Handles updating contact info on DB
 */

contactsController.postContact = (req, res, next) => {
  console.log('postContact');
  const {
    companyName, name, title, email, phone, notes, links,
  } = req.body;

  const values = [companyName, name, title, email, phone, notes, links];

  const inputContact = `INSERT INTO CONTACTS(company_name_fk, name, 
  title, email, phone, notes, links)
  VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`;

  db.query(inputContact, values)
    .then((response) => {
      res.locals.contact = response.rows[0];
      return next();
    })
    .catch((err) => {
      console.log(err);
      return next(err);
    });
};

module.exports = contactsController;
