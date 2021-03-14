const mongojs = require('mongojs')
const nodemailer = require('nodemailer')
// DATABASE
const db_url = require('../config/database')


// VARIABLES
const db = mongojs(db_url.uri)



const forgotPasswordPost = (req,res)=>{
    const {email} = req.body;
    db.users.findOne({username:email},(err,user)=>{
         if(user !== null)
         {
             let to = email;
             let subject = 'RESET YOUR PASSWORD'
             let message = 'Hi '+user.first_name + ', Please visit this link to reset your password\nWebsite Link: '+process.env.URL+'reset_password/'+user._id;
             
             var transporter = nodemailer.createTransport({
                host: "smtp-mail.outlook.com",
                secureConnection: false, 
                port: 587,
                tls: {
                   ciphers:'SSLv3'
                },
                auth: {
                    user: 'support@centum.co.ke',
                    pass: 'c@sp3rVault!@'
                }
            });
        
            var mailOptions = {
                from:'support@centum.co.ke',
                to: to,
                subject: subject,
                text:message
            };
        
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    req.flash('danger','Email not sent, Please try again.')
                    res.redirect('/forgot_password')
                } else {
                    req.flash('info','Email has been sent')
                    res.redirect('/forgot_password')
             
                }
            });
              
         }
         else if(user === null)
         {
             req.flash('danger','No user found.')
             res.redirect('/forgot_password')
         }
    })
}
module.exports = {
    forgotPasswordPost:forgotPasswordPost
}