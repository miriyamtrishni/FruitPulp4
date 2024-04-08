const express =require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const fs = require('fs');
const PDFDocument = require('pdfkit');


const UserModel = require('./models/Users')
const SupplierUserModel = require('./models/Suppliers')


// Import the DeletedUserModel
const DeletedUserModel = require('./models/DeletedUsers');
const app = express()
app.use(cors())
app.use(express.json())



mongoose.connect("mongodb+srv://all:all123@cluster0.j8vsstt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

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
        email: req.body.email ,
        jobtitle: req.body.jobtitle ,
        salary: req.body.salary
    })
    .then(users => res.json(users))
    .catch(err => res.json(err))

})

// Route to delete a user
app.delete('/deleteUser/:id', async (req, res) => {
    const id = req.params.id;


})

app.post("/createUser", (req, res) =>{
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

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
    .then(res => res.json(suppliers))
    .catch(err => res.json(err))
})

app.post("/createUsersh", (req, res) =>{
    SupplierUserModel.create(req.body)
    .then(suppliers => res.json(suppliers))
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

        // Add content to the PDF
        doc.fontSize(20).fillColor('black').text('Employee Details Report\n\n');
        users.forEach(user => {
            doc.fontSize(10).text(`Name: ${user.name}`);
            doc.text(`EID: ${user.eid}`);
            doc.text(`NIC: ${user.nic}`);
            doc.text(`Gender: ${user.gender}`);
            doc.text(`Age: ${user.age}`);
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



        
       



app.listen(3001,() => {

    console.log("server is running")
})
