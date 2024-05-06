require('dotenv').config();

const express = require ('express');
const cors = require('cors');
const mongoose = require('mongoose');
const connectDB = require('./models/config/db');
const User = require('./models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const country = require('./models/country');
const employee = require('./models/employee');

const app = express();
app.use(cors());

app.use(express.json());

//connect to db
connectDB();


app.post('/api/signup', async (req,res) =>{
    console.log(req.body)
    try {
        const newPassword = await bcrypt.hash(req.body.password, 10)
        const user = await User.create({
            fullname:req.body.fullname,
            email:req.body.email,
            password: newPassword,
            empId:req.body.empId,
            role:req.body.role
        })
        res.json({status: 'ok'})
    } catch (error) {
        res.json({status: 'error', error:'Email or Employee-Id already exists. Please use a different email or Employee-Id'})
        console.log(error);

    }
})
app.post('/api/login', async (req,res) =>{
   

       const user = await User.findOne({
            email: req.body.email, 
       })

      if(!user) {
        return {status: 'error', error: 'Invalid login'}
      } 
      const isPasswordValid = await bcrypt.compare(
		req.body.password,
		user.password
	)
    if (isPasswordValid) {
		const token = jwt.sign(
			{
				name: user.name,
				email: user.email,
			},
			'secret123'
		)
        return res.json({ status: 'ok', user: token })
	} else {
		return res.json({ status: 'error', user: false })
	}

});
app.get('/api/quote', async (req, res) => {
	const token = req.headers['x-access-token']

	try {
		const decoded = jwt.verify(token, 'secret123')
		const email = decoded.email
		const user = await User.findOne({ email: email })

		return res.json({ status: 'ok', quote: user.quote })
	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: 'invalid token' })
	}
})

app.post('/api/quote', async (req, res) => {
	const token = req.headers['x-access-token']

	try {
		const decoded = jwt.verify(token, 'secret123')
		const email = decoded.email
		await User.updateOne(
			{ email: email },
			{ $set: { quote: req.body.quote } }
		)

		return res.json({ status: 'ok' })
	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: 'invalid token' })
	}
})


app.get('/api/country', async (req, res) => {
    // Use the 'country' model to fetch all country data from the database
    const countries = await country.find();
    
    // Send the fetched country data as a JSON response
    res.json({
        countries,
    });
});


app.post('/api/add' , async(req,res) => {
	const emplloyee = await employee.create({
		fullname:req.body.fullname,
		fatherName:req.body.fatherName,
		motherName:req.body.motherName,
		dob:req.body.dob,
		gender:req.body.gender,
		maritalStatus:req.body.maritalStatus,
		phoneNumber:req.body.phoneNumber,
        email:req.body.email,
		empImg:req.body.empImg,
		adress:req.body.adress,
		emgContact:req.body.emgContact,
		emgRelation:req.body.emgRelation,
		emgNumber:req.body.emgNumber,
		empId:req.body.empId,
		doj:req.body.doj,
		type:req.body.type,
		team:req.body.team,
		status:req.body.status,
		managerName:req.body.managerName,
		designation:req.body.designation,
		ismanager:req.body.ismanager,
		country:req.body.country,
		state:req.body.state,
		district:req.body.district,
		mandal:req.body.mandal,
		village:req.body.village,
		lpa:req.body.lpa,
		salary:req.body.salary,
		basic:req.body.basic,
		hra:req.body.hra,
		ca:req.body.ca,
		other:req.body.other,
		pf:req.body.pf,
		tax:req.body.tax,
		esi:req.body.esi,
		tds:req.body.tds,
		insurance:req.body.insurance,
		loan:req.body.loan,
		bankName:req.body.bankName,
		accNo:req.body.accNo,
		uanNumber:req.body.uanNumber,
		ifscCode:req.body.ifscCode
	})
})


const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
