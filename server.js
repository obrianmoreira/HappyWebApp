const express = require('express');
const app = new express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const myURL = new URL('http://happyapi-cleaning.vercel.app');


app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb+srv://obrianmoreira:KaplerB@cluster0.r5ewwpf.mongodb.net/happyDB?retryWrites=true&w=majority', {useNewUrlParser: true}, {useUnifiedTopology: true})
//mongodb+srv://obrianmoreira:KaplerB@cluster0.r5ewwpf.mongodb.net/?retryWrites=true&w=majority

// Create a data Schema
const leadSchema = {
    name: String,
    email: String,
    phone: String
}

const Lead = mongoose.model('Lead', leadSchema);

//app.get("/", (req, res)=>{
    //res.sendFile(__dirname + "/src/index.html");
    //res.render(__dirname + "/views/pages/index.ejs",{});
//})

app.listen(myURL, function(){
    app.post((req, res) =>{
        let newLead = new Lead({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone
        })
        newLead.save();
        res.redirect("http://happyapp-cleaning.vercel.app");
    })
})