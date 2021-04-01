const db = require('../models/models');


/**
 * Authors: Adrian Inza-Cruz Taylor Davis
 * Jobs Router
 * Handles creating/updating jobs
 */

const jobsController = {};
jobsController.getJobs = (req, res, next) => {
  console.log('getJobs');
  const queryStr = 'SELECT * FROM jobs';
  
  db.query(queryStr)
    .then((jobs) => {
      // console.log(jobs);
      res.locals.jobs = jobs.rows;
      return next();
    })
    .catch((err) => next(err));
};

jobsController.postJob = (req, res, next) => {
  console.log('postInfo');
  const { company_name, location, tech, notes, contact, progress } = req.body;
  const queryStr = `INSERT INTO jobs VALUES ('${company_name}', '${location}','${contact}','${tech}', '${notes}', '${progress}') RETURNING *`;

  db.query(queryStr)
    .then((job) => {
      console.log(job);
      res.locals.job = job.rows[0];
      return next();
    })
    .catch((err) => next(err));
};

jobsController.updateInfo = (req, res, next) => {
  const { location, note, tech, progress, companyName } = req.body;
  const queryStr = `update jobs set location = '${location}', notes = '${note}', tech = '${tech}', progress = ${progress} WHERE company_name = '${companyName}' RETURNING *`;

  db.query(queryStr)
    .then((update) => { 
      console.log(update);
      res.locals.job = update.rows[0];
      return next();
    })
    .catch((err) => next(err));
};

module.exports = jobsController;