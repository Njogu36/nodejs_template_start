const checkUser = (req,res,next)=>{
    if(!req.user)
    {
     req.flash('info','You have been logged out. Kindly login.')
     res.redirect('/')
    }
    else
    {
        next()
    }
}
module.exports = checkUser