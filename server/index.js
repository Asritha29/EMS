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
const manpower = require('./models/manpower');
const electrical = require('./models/electrical');
const infra = require('./models/infra');
const LeaveRequest = require('./models/leave-requests');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const { Session } = require('express-session');

const app = express();
app.use(cors());

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
 

//connect to db
connectDB();


app.get('/api/', async (req, res) => {
	if(req.session.email) {
		return res.json({valid: true, email: req.session.email})
	}else{
		return res.json({valid: false})
	}
})

app.post('/api/signup', async (req,res) =>{
    console.log(req.body)
    try {
		
		const employeeExists = await employee.exists({ empId: req.body.empId });
        
        if (!employeeExists) {
            // If the employee doesn't exist, return an error response
            return res.status(400).json({ status: 'error', message: 'Employee-Id does not exist' });
        }

        const newPassword = await bcrypt.hash(req.body.password, 10)
        const user = await User.create({
            fullname:req.body.fullname,
            email:req.body.email,
            password: newPassword,
            empId:req.body.empId,
            role:req.body.role
        })
        res.json({status: 'ok'})
		console.log(user);
    } catch (error) {
        res.json({status: 'error', error:'Email or Employee-Id already exists. Please use a different email or Employee-Id'})
        console.log(error);

    }
})
app.post('/api/login', async (req,res) =>{
   

       const user = await User.findOne({
            email: req.body.email, 
       })
	   if (!user) return res.status(400).send('Invalid credentials');
      if(!user) {
        return {status: 'error', error: 'Invalid credentials'}
      } 
      const isPasswordValid = await bcrypt.compare(
		req.body.password,
		user.password
	)
    if (!isPasswordValid) {
		const token = jwt.sign(
			{
				name: user.name,
				email: user.email,
				id: user._id,
				role: user.role,
				status: user.status,
				approvers: [
					{ role: 'hr', approved: false },
					{ role: 'manager', approved: false },
				],
			},
			'secret123'
		)
        return res.json({ status: 'ok', user: token })
	} else {
		return res.json({ status: 'error', user: false })
	}

});

const verifyToken = (req, res, next) => {
	const token = req.header('Authorization').replace('Bearer ', '');
	if (!token) return res.status(401).send('Access denied');
	try {
	  const verified = jwt.verify(token, 'your_jwt_secret');
	  req.user = verified;
	  next();
	} catch (err) {
	  res.status(400).send('Invalid token');
	}
  };
  
  const checkRole = (roles) => (req, res, next) => {
	if (!roles.includes(req.user.role)) return res.status(403).send('Access denied');
	next();
  };

  app.get('/admin', verifyToken, checkRole(['admin']), (req, res) => {
	res.send('Admin content');
  });
  
  app.get('/user', verifyToken, checkRole(['user', 'admin']), (req, res) => {
	res.send('User content');
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
	const Electrical = await electrical.find();
    const Manpower = await manpower.find();
	const Infra = await infra.find();
    // Send the fetched country data as a JSON response
    res.json({
        countries,
		Electrical,
		Manpower,
		Infra
    });
});


app.post('/api/add' , async(req,res) => {
	try{
	const Employee = await employee.create({
		fullName:req.body.fullName,
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
	res.json({status: 'ok'})
	console.log(Employee);
} catch (error) {
	res.json({status: 'error', error:'Email or Employee-Id already exists. Please use a different email or Employee-Id'})
	console.log(error);

}
});

// Leave appllication 


app.post('/api/apply', async (req, res) => {
    try {
		const employeeExists = await employee.exists({ empId: req.body.empId });
        
        if (!employeeExists) {
            // If the employee doesn't exist, return an error response
            return res.status(400).json({ status: 'error', message: 'Employee-Id does not exist' });
        }

        // Assuming LeaveRequest is a model representing leave requests in your database
        const Apply = await LeaveRequest.create({
            fullName: req.body.fullName,
            empId: req.body.empId,
            lsd: req.body.lsd,
            led: req.body.led,
            reason: req.body.reason
        });
        res.json({ status: 'ok' });
		console.log(Apply);
    } catch (error) {
        // If there's an error during the creation process
        res.json({ status: 'error' });
        console.log(error);
    }
});

app.get('/api/leaveRequests', async (req, res) => {
    const Requests = await LeaveRequest.find();
    res.send(Requests);
});

app.post('/approveLeave', async (req, res) => {
    const { LeaveRequestId, role } = req.body;
    try {
        const leave = await LeaveRequest.findById(LeaveRequestId);
        const approver = leave.approvers.find(a => a.role === role);
        if (approver) {
            approver.approved = true;
            await leave.save();
            res.send({ message: `${role} has approved the leave` });
        } else {
            res.status(404).send({ message: 'Approver not found' });
        }
    } catch (error) {
        res.status(500).send({ message: 'Error approving leave' });
    }
});

app.post('/declineLeave', async (req, res) => {
    const { LeaveRequestId, role } = req.body;
    const leave = await LeaveRequest.findById(LeaveRequestId);
    leave.status = 'Declined';
    await leave.save();
    res.send({ message: `${role} has declined the leave` });
});
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
