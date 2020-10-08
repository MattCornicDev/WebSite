const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');

// instancier EJS
app.set('view engine','ejs');
app.use(express.static('public'));

const methodOverride = require('method-override');
const flash = require('connect-flash');

app.get("/", function(req, res){
    res.render("index");
});
app.get("/contact",(req, res)=>{
    res.render("contact");
});
app.get("/cv",(req,res)=>{
    res.render("cv");
});


app.listen(8080, function(req, res){
    console.log("tout fonctione bien");
});