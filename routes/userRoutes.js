const { Router } = require('express');
const userController = require('../controllers/userController');

const router = Router();

router.get('/user-profile', userController.userProfile)
router.put('/user-profile/:id', userController.updateUserProfile)
router.delete('/user-profile/:id', userController.deleteUserProfile)

module.exports = router;