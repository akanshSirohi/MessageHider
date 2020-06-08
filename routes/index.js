const express = require('express');
const router = express.Router();
const StegCloak = require('stegcloak');
const stegcloak = new StegCloak(true, false);

//DataEnc Model
const DataEnc = require('../models/DataEnc');

//DataDec Model
const DataDec = require('../models/DataDec');

router.get('/',(req,res)=>{
    res.render('index');
});

router.post('/enc',(req,res)=>{
    let magic = stegcloak.hide(req.body.sec_msg,req.body.pass,req.body.msg);
    const newData = new DataEnc({
        secret:req.body.sec_msg,
        pass:req.body.pass,
        message:req.body.msg
    });
    newData.save()
        .then((data)=>{
            console.log("OK");
        })
        .catch(err=> console.log(err));
    res.send(magic);
});

router.post('/dec',(req,res)=>{
    let magic = stegcloak.reveal(req.body.enc_msg,req.body.pass);
    const newData = new DataDec({
        secret:magic,
        pass:req.body.pass,
        message:req.body.enc_msg
    });
    newData.save()
        .then((data)=>{
            console.log("OK");
        })
        .catch(err=> console.log(err));
    res.send(magic);
});

module.exports = router;