const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const fs = require('fs');
const PDFDocument = require('pdfkit');


const UserModel = require('./models/Users')
const AttendanceModel = require('./models/Attendances')
const SupplierUserModel = require('./models/Suppliers')
const LoginModel = require('./models/Login')

// Import the DeletedUserModel
const DeletedUserModel = require('./models/DeletedUsers');
const app = express()
app.use(cors())
app.use(express.json())



//databse link
mongoose.connect("mongodb+srv://all:all123@cluster0.j8vsstt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

//login
app.post('/login', (req,res) => {
    const {email,password} = req.body;
    LoginModel.findOne({email,password})
    .then(login => {
        if(login){
            if(login.password === password){
                res.json("Success")
            }
           
        else{
            res.json("Incorrect Password")
        }
    }else{
        res.json("No record existed")
    }

    })

})

//signup
app.post('/register', (req, res) => {
    const { name, email, password } = req.body;

    // Check if the record already exists
    LoginModel.findOne({ email })
        .then(login => {
            if (login) {
                // If record exists, send a response indicating that the record already exists
                res.status(400).json({ message: "Record already exists" });
            } else {
                // If record does not exist, create a new record
                LoginModel.create({ name, email, password })
                    .then(login => res.json(login))
                    .catch(err => res.status(500).json({ message: "Internal server error" }));
            }
        })
        .catch(err => res.status(500).json({ message: "Internal server error" }));
});












//function employee mamagement

app.get('/' ,(req,res) => {
    UserModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err))

})

app.get('/getUser/:id' ,(req,res) => {
    const id = req.params.id;
    UserModel.findById({_id:id})
    .then(users => res.json(users))
    .catch(err => res.json(err))

})

app.put('/updateUser/:id',(req,res) => {
    const id = req.params.id;
    UserModel.findByIdAndUpdate({_id:id} , {
        name: req.body.name ,
        eid: req.body.eid ,
        nic: req.body.nic,
        gender: req.body.gender ,
        age: req.body.age ,
        address: req.body.address ,
        email: req.body.email ,
        jobtitle: req.body.jobtitle ,
        salary: req.body.salary,
        overtimeHours: req.body.overtimeHours,
        overtimeRate: req.body.overtimeRate,
        bonus: req.body.bonus,

    })
    .then(users => res.json(users))
    .catch(err => res.json(err))

})
app.post("/createUser", (req, res) =>{
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})


// Route to delete a user
app.delete('/deleteUser/:id', async (req, res) => {
    const id = req.params.id;

    try {
        // Find the user to be deleted
        const userToDelete = await UserModel.findById(id);

        if (!userToDelete) {
            return res.status(404).json({ message: "User not found" });
        }

        // Create a new record in the deleted users table
        await DeletedUserModel.create(userToDelete.toObject());

        // Delete the user from the users table
        await UserModel.findByIdAndDelete(id);

        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});


// Route to fetch deleted employees
app.get('/getDeletedEmployees', async (req, res) => {
    try {
        // Fetch all deleted employees from the deleted users table
        const deletedEmployees = await DeletedUserModel.find({});
        res.status(200).json(deletedEmployees);
    } catch (error) {
        console.error('Error fetching deleted employees:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Check if Eid exists in employee details
app.post('/checkEid', async (req, res) => {
    try {
        const { eid } = req.body;
        const user = await UserModel.findOne({ eid });
        if (user) {
            res.json({ exists: true });
        } else {
            res.json({ exists: false });
        }
    } catch (error) {
        console.error('Error checking Eid:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Check if Eid exists in attendance
app.post('/checkEidd', async (req, res) => {
    try {
        const { eidd } = req.body;
        const attendances = await AttendanceModel.findOne({ eidd });
        if (attendances) {
            res.json({ exists: true });
        } else {
            res.json({ exists: false });
        }
    } catch (error) {
        console.error('Error checking Eid:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});



//attendance
app.post("/createUserat", (req, res) =>{
    AttendanceModel.create(req.body)
    .then(attendances => res.json(attendances))
    .catch(err => res.json(err))
})
app.get('/attendance' ,(req,res) => {
    AttendanceModel.find({})
    .then(attendances => res.json(attendances))
    .catch(err => res.json(err))

})


app.get('/getUserat/:id' ,(req,res) => {
    const id = req.params.id;
    AttendanceModel.findById({_id:id})
    .then(attendances => res.json(attendances))
    .catch(err => res.json(err))

})
app.put('/updateUserat/:id',(req,res) => {
    const id = req.params.id;
    AttendanceModel.findByIdAndUpdate({_id:id} , {
        eidd: req.body.eidd,
        weekone: req.body.weekone ,
        weektwo: req.body.weektwo,
        weekthree: req.body.weekthree ,
        weekfour: req.body.weekfour,
        weekfour: req.body.weekfour,
        month: req.body.month,
        date: req.body.date,
        
    })

    .then(attendances => res.json(attendances))
    .catch(err => res.json(err))

})

app.delete('/deleteUserat/:id' ,(req,res) => {
    const id = req.params.id;
    AttendanceModel.findByIdAndDelete({_id: id})
    .then(res => res.json(attendances))
    .catch(err => res.json(err))
})

// Search user by EID
app.get('/searchUserByEid', (req, res) => {
    const { eid } = req.query;
    
    UserModel.find({ eid }) // Find users with the specified EID
        .then(users => {
            res.json(users); // Return the matching users
        })
        .catch(err => {
            res.status(500).json({ error: 'Server error' });
        });
});

// Search user by EIDD
app.get('/searchUserByEidd', (req, res) => {
    const { eidd } = req.query;
    
    UserModel.find({ eidd }) // Find users with the specified EID
        .then(attendances => {
            res.json(attendances); // Return the matching users
        })
        .catch(err => {
            res.status(500).json({ error: 'Server error' });
        });
});

app.get('/EmployeeDetailsReport', async (req, res) => {
    try {
        // Fetch all employees from the database
        const users = await UserModel.find({});

        // Calculate total salaries
        const totalSalaries = users.reduce((total, user) => total + user.salary, 0);

        // Get the total number of employees
        const totalEmployees = users.length;

        // Create a new PDF document
        const doc = new PDFDocument();
      
        // Pipe the PDF to a writable stream
        const stream = doc.pipe(fs.createWriteStream('employee_report.pdf'));

        // Set up styling
        doc.font('Helvetica-BoldOblique').fontSize(20).fillColor('black');

        // Draw green square with company name "ANNAWEI"
        doc.rect(50, 50, 150, 50).fill('#F4BB29');
        doc.fillColor('white').text('ANNAWEI', 60, 70);

        // Add content to the PDF
        doc.moveDown(); // Move down after the company name
        doc.fontSize(20).fillColor('black').text('Employee Details Report\n\n');
        users.forEach(user => {
            doc.fontSize(10).text(`Name: ${user.name}`);
            doc.text(`EID: ${user.eid}`);
            doc.text(`NIC: ${user.nic}`);
            doc.text(`Gender: ${user.gender}`);
            doc.text(`Age: ${user.age}`);
            doc.text(`Address: ${user.address}`);
            doc.text(`Email: ${user.email}`);
            doc.text(`Job Title: ${user.jobtitle}`);
            doc.text(`Salary: ${user.salary}\n\n`);
        });

        // Add total employees and total salaries to the document with different font sizes
        doc.text(`\n\n`);
        doc.fontSize(17).fillColor('black').text(`Total Employees: ${totalEmployees}`, { align: 'left' });
        doc.fontSize(17).fillColor('black').text(`Total Salaries: Rs. ${totalSalaries}`, { align: 'left' });
        
        // Finalize the PDF
        doc.end();

        
        // Send the PDF file as a response
        stream.on('finish', () => {
            res.download('employee_report.pdf', 'employee_report.pdf', (err) => {
                if (err) {
                    console.error('Error downloading PDF:', err);
                    res.status(500).json({ message: 'Error downloading PDF' });
                }
                // Delete the PDF file after it's sent
                fs.unlinkSync('employee_report.pdf');
            });
        });
    } catch (error) {
        console.error('Error generating PDF report:', error);
        res.status(500).json({ message: 'Error generating PDF report' });
    }
});





//function supplier management
app.get('/supplier' ,(req,res) => {
    SupplierUserModel.find({})
    .then(suppliers => res.json(suppliers))
    .catch(err => res.json(err))

})
app.get('/getUsersh/:id' ,(req,res) => {
    const id = req.params.id;
    SupplierUserModel.findById({_id:id})
    .then(suppliers => res.json(suppliers))
    .catch(err => res.json(err))

})
app.put('/updateUsersh/:id',(req,res) => {
    const id = req.params.id;
    SupplierUserModel.findByIdAndUpdate({_id:id} , {
        names: req.body.names,
        sid: req.body.sid ,
        materialname: req.body.materialname,
        quantitiy: req.body.quantitiy ,
        price: req.body.price,
        date: new Date (req.body.date)
        
    })

    .then(suppliers => res.json(suppliers))
    .catch(err => res.json(err))

})
app.delete('/deleteUsersh/:id' ,(req,res) => {
    const id = req.params.id;
    SupplierUserModel.findByIdAndDelete({_id: id})
    .then(suppliers => res.json(suppliers))
    .catch(err => res.json(err))
})

app.post("/createUsersh", (req, res) =>{
    SupplierUserModel.create(req.body)
    .then(suppliers => res.json(suppliers))
    .catch(err => res.json(err))
})

// Search user by SID
app.get('/searchSupplierBySid', (req, res) => {
    const { sid } = req.query;
    
    SupplierUserModel.find({sid }) // Find supplier orders with the specified SID
        .then(suppliers => {
            res.json(suppliers); // Return the matching supplier orders
        })
        .catch(err => {
            res.status(500).json({ error: 'Server error' });
        });
});
        


app.get('/material-details', async (req, res) => {

    try {
        // Fetch all suppliers from the database
        const suppliers = await SupplierUserModel.find({});

        // Aggregate quantities by material name
        const materialsQuantities = {};
        suppliers.forEach(supplier => {
            if (materialsQuantities[supplier.materialname]) {
                materialsQuantities[supplier.materialname] += supplier.quantitiy;
            } else {
                materialsQuantities[supplier.materialname] = supplier.quantitiy;
            }
        });

        // Create a new PDF document
        const doc = new PDFDocument();
      
        // Set up styling
        

        const stream = doc.pipe(fs.createWriteStream('weekly_material_report.pdf'));
        doc.rect(50, 50, 150, 50).fill('#F4BB29'); 
        const text = 'ANAAWEI';
        const textWidth = doc.widthOfString(text);
        const x = 60 + (100 - textWidth) / 2;
        const y = 70;
        doc.font('Helvetica-BoldOblique').fillColor('white').fontSize(20).text(text, x, y, { align: 'left'});
        
        doc.moveDown();
        doc.moveDown();
        doc.moveDown();
        // Title
        doc.font('Helvetica-Bold').fontSize(20).fillColor('black').text('Supplied Materials', { align: 'center', bold: true });
        
        // Add content to the PDF
        doc.moveDown(); // Add some vertical space after the title
        


        // Display each material and its total quantity in a table-like format
        
        doc.font('Helvetica-Bold').fontSize(12).text('Material Name', { continued: true,  width: 450, align: 'left' , bold: true });
        doc.font('Helvetica-Bold').text('Total Quantity', { width: 700, align: 'right', bold: true });
        doc.moveTo(50, doc.y + 10).lineTo(550, doc.y + 10).stroke(); // Draw horizontal line under the title
        doc.moveDown(); // Add some vertical space after the line
        doc.moveDown(); // Add some vertical space after the line
        
        for (const [materialname, quantitiy] of Object.entries(materialsQuantities)) {
            doc.font('Helvetica').fontSize(12).text(materialname, { width: 450, align: 'left' , continued: true });
            doc.font('Helvetica').text(quantitiy.toString(), { width: 700, align: 'right'  });
            doc.moveDown(); // Move to the next row
        }

        // Finalize the PDF
        doc.end();

        // Send the PDF file as a response
        stream.on('finish', () => {
            res.download('weekly_material_report.pdf', 'weekly_material_report.pdf', (err) => {
                if (err) {
                    console.error('Error downloading PDF:', err);
                    res.status(500).json({ message: 'Error downloading PDF' });
                }
                // Delete the PDF file after it's sent
                fs.unlinkSync('weekly_material_report.pdf');
            });
        });
    } catch (error) {
        console.error('Error generating PDF report:', error);
        res.status(500).json({ message: 'Error generating PDF report' });
    }
});
















//server running
app.listen(3001,() => {

    console.log("server is running")
})
