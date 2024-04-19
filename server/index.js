require('dotenv').config();

const express = require ('express');
const cors = require('cors');
const mongoose = require('mongoose');
const connectDB = require('./models/config/db');
const User = require('./models/user.model');



const app = express();
app.use(cors());

app.use(express.json());

//connect to db
connectDB();


app.post('/api/signup', async (req,res) =>{
    console.log(req.body)
    try {
        const user = await User.create({
            fullname:req.body.fullname,
            email:req.body.email,
            password:req.body.password,
            empId:req.body.empId,
            role:req.body.role
        })
        res.send(user)
    } catch (error) {
        console.log(error);
    }
})


const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
