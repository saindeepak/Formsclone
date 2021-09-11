const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const cors = require('cors');
const FormsModel = require('./models/Forms');
require('dotenv').config();

app.use(express.static('dist'));

app.use(express.json());

app.use(cors());

mongoose.connect(
    process.env.REACT_APP_DB_URL,
    {   
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)

mongoose.connection.on("error", err => {
    console.log("err", err)
})

mongoose.connection.on("connected", (err, res) => {
    console.log("mongoose is connected")
})

app.post('/insert', async (req,res) => {
    
    let obj = req.body;
    console.log(obj)
    const form = new FormsModel(obj);

    try{
        await form.save();
        res.sendStatus(200);
        
    } catch (err){
        console.log('from server: ' + err);
        res.sendStatus(400);
    }
});

app.listen(3000, () => {
    console.log('Running on port 3000');
})