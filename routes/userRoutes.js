const { Router } = require('express');
const userController = require('../controllers/userController');

const router = Router();

router.get('/user-profile', userController.userProfile)
router.put('/user-profile', userController.updateUserProfile)
router.delete('/user-profile', userController.deleteUserProfile)

module.exports = router;