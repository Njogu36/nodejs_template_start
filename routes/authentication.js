const express = require('express');
const router = express.Router();

// CUSTOM FUNCTIONS
const LOGIN_PAGE = require('../authentication_function/login_page');
const LOGIN_POST = require('../authentication_function/login_post');
const FORGOT_PASSWORD_PAGE = require('../authentication_function/forgot_password_page');
const FORGOT_PASSWORD_POST = require('../authentication_function/forgot_password_post');
const RESET_PASSWORD_PAGE = require('../authentication_function/reset_password_page');
const RESET_PASSWORD_POST = require('../authentication_function/reset_password_post')
const CHECK_USER_TYPE = require('../authentication_function/check_user_type')
const LOG_OUT = require('../authentication_function/log_out');


// MIDDLEWARES
const CHECK_USER = require('../middlewares/check_user')

// LOGIN PAGE
router.get('/',LOGIN_PAGE.loginPage)
router.post('/login_post',LOGIN_POST.loginPost)

// FORGOT PAGE
router.get('/forgot_password',FORGOT_PASSWORD_PAGE.forgotPasswordPage);
router.post('/forgot_password_post',FORGOT_PASSWORD_POST.forgotPasswordPost)

// RESET PASSWORD PAGE
router.get('/reset_password/:id',RESET_PASSWORD_PAGE.reset_password_page);
router.post('/reset_password_post/:id',RESET_PASSWORD_POST.reset_password_post)

// CHECK USER TYPE
router.get('/check_user_type',CHECK_USER,CHECK_USER_TYPE.check_user_type)



// LOGOUT
router.get('/logout',CHECK_USER,LOG_OUT.logOut)

module.exports = router;