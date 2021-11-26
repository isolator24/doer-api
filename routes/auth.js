const express = require('express');
const { getMe, register, login, forgotPassword } = require('../controllers/auth');

const router = express.Router();

const { protect} = require('../middleware/auth')

router.post('/register', register);
router.post('/login', login);
router.get('/me', protect, getMe);
router.post('/forgotPassword', forgotPassword);


module.exports = router;