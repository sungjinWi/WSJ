const express = require("express")
const cookieParser = require("cookie-parser")
const app = express()
const bodyParser = require("body-parser")
const multer = require("multer")
const upload = multer();
const session = require("express-session");
const dotenv = require("dotenv").config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(upload.array())
app.use(cookieParser())
app.use(session({
    secret: process.env.SECRET,
    secure: false,
    resave:false,
    saveUninitialized:true,
    cookie : {
        maxAge:(1000*60*100) //milisecond
}}))


var Users = [];
app.set('view engine', 'pug');
app.set("views", './views');

const port = 5000
const host = '127.0.0.1'



app.get('/signup', (req,res) => {
    res.render('5signup', {message: "please login or signup"})
})

app.post('/signup', (req, res) => {
    if(!req.body.id || !req.body.password){
        res.status("404");
        res.send("Invalid ID or Password~~~")
    } else {
        Users.filter((user) => {
            if(user.id === req.body.id) {
                res.render('5signup', {
                    message: "User Already Exists! Login or choose another User ID"
                })

            }
        })
        let newUser = {id: req.body.id, password: req.body.password};
        Users.push(newUser)
        req.session.user = newUser
        res.redirect('/5protected_page')

    }
})

app.listen(port, host, () => {
    console.log(`application running at http://${host}:${port}/`)
});