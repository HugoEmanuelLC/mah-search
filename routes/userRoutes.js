const { Router } = require('express');
const userController = require('../controllers/userController');

const router = Router();

router.get('/user-profile', (req, res) => res.render('userProfile', { update: false}));
router.get('/update-profile', (req, res) => {res.locals.user ? res.render('userProfile', { update: true}) : res.redirect('/login')});

router.put('/update-profile', userController.updateUserProfile)
router.delete('/delete-profile', userController.deleteUserProfile)

module.exports = router;