const forgotPasswordPage = (req,res)=>{
    res.render('./authentication/forgot_password.jade')
}
module.exports = {
    forgotPasswordPage:forgotPasswordPage
}