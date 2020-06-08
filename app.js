const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000;

// global.baseurl = `https://msg-hider.herokuapp.com`;
global.baseurl = `http://localhost:${port}`;

//DB Config
const db = require('./config/keys').MongoURI;

// Connect to Mongo
mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(() => {console.log("Mongo DB Connected!")})
    .catch(err => console.log("Mongo Connect Error: "+err));

app.use(express.static('static'));

//EJS
app.use(expressLayouts);
app.set('view engine','ejs');

//Bodyparser
app.use(express.urlencoded({extended:true}));

//Routes
app.use('/',require('./routes/index'));

app.listen(port,()=>{
    console.log(`Server started on port ${baseurl}`);
});