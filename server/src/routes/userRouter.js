const Router = require('express');
const router = new Router();
const userController = require('../controller/userController');
const authMiddleware = require('../middleware/authMiddleware');
const { check } = require('express-validator');

router.post(
    '/registration',
    [
        check('email', 'Please enter valid email').isEmail().normalizeEmail(),
        check('password', 'Please enter valid password').isLength({ min: 8 }),
        check('fullName', 'Please enter fullname').isLength({ min: 3 }),
    ],
    userController.registration
);

router.post(
    '/login',
    [
        check('email', 'Please enter valid email').isEmail().normalizeEmail(),
        check('password', 'Please enter valid password').isLength({ min: 8 }),
    ],
    userController.login
);

router.get('/', userController.getAll);
router.get('/auth', authMiddleware, userController.check);

module.exports = router;
