const db = require('../models/models');


/**
 * Authors: Adrian Inza-Cruz Taylor Davis
 * Jobs Router
 * Handles creating/updating jobs
 */

const jobsController = {};
jobsController.getJobs = (req, res, next) => {
  console.log('getJobs');
  const queryStr = 'SELECT * FROM jobs INNER JOIN todo as t ON company_name = t.company_name_fk INNER JOIN contacts as c on company_name = c.company_name_fk';

  db.query(queryStr)
    .then((jobs) => {
      console.log(jobs);
      res.locals.jobs = jobs.rows;
      return next();
    })
    .catch((err) => next(err));
};

jobsController.postJob = (req, res, next) => {
  console.log('postInfo');
  const { companyName } = req.body;
  const queryStr = `INSERT INTO jobs VALUES ('${companyName}') RETURNING *`;

  db.query(queryStr)
    .then((job) => {
      console.log(job);
      res.locals.job = job.rows[0];
      return next();
    })
    .catch((err) => next(err));
};

jobsController.updateInfo = (req, res, next) => {
  const { location, note, tech, links, progress, companyName } = req.body;
  const queryStr = `update jobs set location = '${location}', notes = '${note}', tech = '${tech}', links = '${links}', progress = ${progress} WHERE company_name = '${companyName}' RETURNING *`;

  db.query(queryStr)
    .then((update) => { 
      console.log(update);
      res.locals.job = update.rows[0];
      return next();
    })
    .catch((err) => next(err));
};

module.exports = jobsController;