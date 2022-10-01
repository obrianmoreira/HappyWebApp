const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    try{
        router.post('/', (req, res) =>{
            console.log("chegou");
            let newLead = new Lead({
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone
            })
            newLead.save();
            res.redirect('https://happyclean-api.vercel.app/');
        })
    } catch (error) {
        console.error(error);
        return res.status(500).send("server error")
    }
});

module.exports = router;