const express = require('express');
const leads = require('./api/contacts');
const app = new express();
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use("/api/leads", leads);

mongoose.connect('mongodb+srv://obrianmoreira:KaplerB@cluster0.r5ewwpf.mongodb.net/happyDB?retryWrites=true&w=majority', {useNewUrlParser: true}, {useUnifiedTopology: true})
//mongodb+srv://obrianmoreira:KaplerB@cluster0.r5ewwpf.mongodb.net/?retryWrites=true&w=majority

// Create a data Schema
const leadSchema = {
    name: String,
    email: String,
    phone: String
}

const Lead = mongoose.model('Lead', leadSchema);

//app.get("https://happy-lead-app.vercel.app", (req, res)=>{
    //res.sendFile(__dirname + "/src/index.html");
    //res.render(__dirname + "/views/pages/index.ejs",{});
//})

app.post('/api/contacts', (req, res) =>{
    console.log("chegou");
    let newLead = new Lead({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone
    })
    newLead.save();
    res.redirect('https://happyclean-api.vercel.app/');
})

app.listen(PORT, function(){
    console.log("Foi")
})  