// LIBRARY
const passport = require('passport');

const loginPost = passport.authenticate('User',{
    successRedirect:'/check_user_type',
    failureRedirect:'/',
    failureFlash:true,
    session:true
})

module.exports = {
    loginPost:loginPost
}