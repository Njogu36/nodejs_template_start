const logOut = (req,res)=>{
    req.logout();
    res.redirect('/')
}
module.exports = {
    logOut:logOut
}