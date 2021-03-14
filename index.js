const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
//const MongoStore = require('connect-mongo')(session);
const config = require('./config/database')
const app = express();
const PORT = 7000

require('./config/passport')(passport);

// BODY PARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

// MONGOOSE
mongoose.connect(config.uri)
const db = mongoose.connection
db.on('error', (err) => {
    console.log(err)
})
db.once('open', () => {
    console.log('Database has been connected.')
})

// STATIC FILES
app.use(express.static('public'));
app.use(express.static('uploads'));

// VIEWS - JADE
app.set('view engine', 'jade');
app.set('/views', './views');

// CONNECT FLASH
app.use(require('connect-flash')());
app.use(function (req, res, next) {
    res.locals.messages = require('express-messages')(req, res);
    next();
});

// SESSION
app.use(session({
    secret: 'Tier Data Limited Company Billing Management System',
    resave: true,
    saveUninitialized: true,
    //store: MongoStore({ mongooseConnection: mongoose.connection })
}));

// PASSPORT
app.use(passport.initialize());
app.use(passport.session());


// ROUTES
const auth = require('./routes/authentication');

app.use("/",auth)



app.listen(PORT,()=>{
    console.log('App is running on port '+ PORT )
})