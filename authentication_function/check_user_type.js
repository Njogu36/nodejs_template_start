
const check_user_type = (req,res)=>{
    const type = req.user.type
    const password = req.user.password
  
    if(type==='Administrator')
    {
      
       
      res.redirect('/administrator/')
     
    }
    else if(type==='Company')
    {
        
        res.redirect('/company/')
    }
    else
    {
        req.flash('danger','No user found.')
        res.redirect('/')
    }
}
module.exports = {
    check_user_type:check_user_type
}