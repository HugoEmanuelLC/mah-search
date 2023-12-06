const { Router } = require('express');

const companiesController = require('../controllers/companiesController')

const router = Router();

router.post('/add-companie', companiesController.add_companie);
router.get('/list-companies', companiesController.get_companies);

module.exports = router;