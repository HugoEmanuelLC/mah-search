const { Router } = require('express');

const jobsController = require('../controllers/jobsController')

const router = Router();

router.post('/create-job', jobsController.createJob)
router.get('/create-job', (req, res) => {res.locals.user ? res.render('createJob') : res.render('login')})
router.get('/list-jobs', jobsController.listJobs)
router.get('/job/:id', jobsController.JobItem)
router.put('/job/:id', jobsController.updateJob)
router.delete('/job/:id', jobsController.deleteJob)

module.exports = router;