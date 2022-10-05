const express = require('express');
const router = express.Router();
const app = new express();
const PORT = process.env.PORT || 3000;

const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb+srv://obrianmoreira:KaplerB@cluster0.r5ewwpf.mongodb.net/happyDB?retryWrites=true&w=majority', {useNewUrlParser: true}, {useUnifiedTopology: true})

app.use(bodyParser.urlencoded({extended: true}));
app.use("/api/contacts", leads);

const leadSchema = {
    name: String,
    email: String,
    phone: String
}

const Lead = mongoose.model('Lead', leadSchema);


app.post('/api/', (req, res) =>{
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

module.exports = router;