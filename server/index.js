require('dotenv').config();

const express = require ('express');
const cors = require('cors');
const mongoose = require('mongoose');
const connectDB = require('./models/config/db');




const app = express();
app.use(cors());

app.use(express.json());

//connect to db
connectDB();


app.post('/api/login',(req,res) =>{
    console.log(req.body)
})


const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
