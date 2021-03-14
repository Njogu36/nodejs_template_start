// LIBRARY
const bcrypt = require('bcryptjs')

// Models
const User = require('../models/user')

const loginPage = (req,res)=>{
    const query = {
        first_name:'Jon',
        last_name:'Doe',
        username:'evans.njogu01@gmail.com',
        type:'Administrator'
    }
    const password = 'Invisible._10'
    
    User.findOne(query,(err,user)=>{
        if(user)
        {
            res.render('./authentication/login.jade')
        }
        else
        {
           let data =  new User()
           data.first_name='Jon'
           data.last_name ='Doe'
           data.username ='evans.njogu01@gmail.com'
           data.company_name ='Tier Data Limited Company'
           data.company_icon ='/assets/images/logo.png',
           data.type = 'Administrator'
           data.db_name = 'main_db_'
           data.country = 'Kenya'
           data.status = 'Main'
           data.enabled = true
           data.vendor_id = 0
           data.role = 'Administrator'
           data.password=password
           bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(password, salt, function (err, hash) {
                data.password = hash
                data.save(() => {
                    res.render('./authentication/login.jade')
                })
            })
        });
        }
    })
}
module.exports = {
    loginPage:loginPage
}