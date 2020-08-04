const express = require('express');
const router = express.Router();
const userController = require('../controller/auth');

router.post(
  '/',
  userController.signUp,
);
router.post(
  '/signIn',
  userController.signIn,
);


module.exports = router;

