const express = require('express');

const router = express.Router();

/**
 * Authors: Adrian-Inza Cruz, Taylor Davis
 * API
 * Handles Requests to Endpoints
 */
// controllers
const jobsController = require('../controllers/jobsController.js');
const contactsController = require('../controllers/contactsController.js');
const todoController = require('../controllers/todoController.js');

router.get('/jobs', jobsController.getJobs, (req, res) => res.status(200).send(res.locals.jobs));

router.post('/jobs', jobsController.postJob, (req, res) => res.status(200).send(res.locals.job));

router.post('/contacts', contactsController.postContact, (req, res) => res.status(200).send(res.locals.contact));

router.post('/todo', todoController.postTodo, (req, res) => res.status(200).send(res.locals.todo));

router.patch('/jobs', jobsController.updateProgress, (req, res) => res.status(200).send(res.locals.job));

module.exports = router;