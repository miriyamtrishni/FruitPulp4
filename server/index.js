const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const fs = require('fs');
const PDFDocument = require('pdfkit');


const UserModel = require('./models/Users')
const AttendanceModel = require('./models/Attendances')
const SupplierUserModel = require('./models/Suppliers')
const LoginModel = require('./models/Login')
const MachineUserModel = require('./models/Machines')
const DistributorUserModel = require('./models/Distributors')

const LeaveModel = require('./models/Leaves')
const SupplierdetailUserModel = require('./models/Supplierdetails')



const ProductModel = require('./models/Products')
const BatchModel = require('./models/Batches')


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
        dob: req.body.dob ,
        age: req.body.age ,
        address: req.body.address ,
        email: req.body.email ,
        jobtitle: req.body.jobtitle ,
        salary: req.body.salary,
        overtimeHours: req.body.overtimeHours,
        overtimeRate: req.body.overtimeRate,
        bonus: req.body.bonus,
        epf:req.body.epf,
        etf:req.body.etf,
        actualSalary:req.body.actualSalary,


    })
    .then(users => res.json(users))
    .catch(err => res.json(err))

})
app.post("/createUser", (req, res) => {
    UserModel.create(req.body)
        .then(users => res.json({ success: true, message: 'Employee added successfully', data: users }))
        .catch(err => res.json({ success: false, message: 'Error adding employee', error: err }))
});


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

//leave
app.post("/createUserLeave", (req, res) =>{
    LeaveModel.create(req.body)
    .then(leaves => res.json(leaves))
    .catch(err => res.json(err))
})

app.get('/leave' ,(req,res) => {
    LeaveModel.find({})
    .then(leaves => res.json(leaves))
    .catch(err => res.json(err))


})

app.get('/getUserLeave/:id' ,(req,res) => {
    const id = req.params.id;
    LeaveModel.findById({_id:id})
    .then(leaves => res.json(leaves))
    .catch(err => res.json(err))

})




app.get('/getUserLeave/:id' ,(req,res) => {
    const id = req.params.id;
    LeaveModel.findById({_id:id})
    .then(leaves => res.json(leaves))
    .catch(err => res.json(err))

})


app.put('/updateUserLeave/:id',(req,res) => {
    const id = req.params.id;
    LeaveModel.findByIdAndUpdate({_id:id} , {
        eid3: req.body.eid3,
        leavetype: req.body.leavetype ,
        leavepay: req.body.leavepay,
        approve:req.body.approve,
        monthh: req.body.monthh ,
        datee: req.body.datee,
       
        
    })

    .then(leaves => res.json(leaves))
    .catch(err => res.json(err))

})

app.delete('/deleteUserLeave/:id' ,(req,res) => {
    const id = req.params.id;
    LeaveModel.findByIdAndDelete({_id: id})
    .then(res => res.json(leaves))
    .catch(err => res.json(err))
})

// Search user by EID3
app.get('/searchUserByEid3', (req, res) => {
    const { eid3 } = req.query;

    LeaveModel.find({ eid3 }) // Find users with the specified EID
        .then(leaves => {
            res.json(leaves); // Return the matching users
        })
        .catch(err => {
            res.status(500).json({ error: 'Server error' });
        });
});

// Check if Eid exists in attendance
app.post('/checkEid3', async (req, res) => {
    try {
        const { eid3 } = req.body;
        const leaves = await LeaveModel.findOne({ eid3 });
        if (leaves) {
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
    
    AttendanceModel.find({ eidd }) // Find users with the specified EID
        .then(attendances => {
            res.json(attendances); // Return the matching users
        })
        .catch(err => {
            res.status(500).json({ error: 'Server error' });
        });
});

// Search user by in deleted employee
app.get('/searchUserByEiddeleted', (req, res) => {
    const { eid} = req.query;
    
    DeletedUserModel.find({ eid }) // Find users with the specified EID in deleted employee
        .then(employees => {
            res.json(employees); // Return the matching users
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
        const totalSalaries = users.reduce((total, user) => total + user.actualSalary, 0);

        // Get the total number of employees
        const totalEmployees = users.length;

        // Create a new PDF document
        const doc = new PDFDocument();


        // Pipe the PDF to a writable stream
        const stream = doc.pipe(fs.createWriteStream('employee_report.pdf'));
        doc.rect(50, 50, 500, 30).fill('#148F77'); 
        const text = 'Anaawei Holdings (PVT) LTD';
        const textWidth = doc.widthOfString(text);
        const x = 50 + (100 - textWidth) / 2;
        const y = 60;
        
        doc.font('Helvetica-BoldOblique').fillColor('white').fontSize(16).text(text, x, y, { align: 'center'});
        doc.font('Helvetica-Bold').fillColor('#148F77').fontSize(10).text('Anaawei ', 50, 90);
        doc.font('Helvetica-Bold').fontSize(10).text('288/5, Kiralabokkagama, Moragollagama', 50, 105);
        doc.font('Helvetica-Bold').fontSize(10).text('+94 769 850 663 / +94 719 267 777',50, 120);
        doc.font('Helvetica-Bold').fontSize(10).text('info@anaawei.com ',50, 135);
        doc.moveDown();
        
        

        const currentDate = new Date().toLocaleDateString('en-US', { timeZone: 'UTC' });
        const dateText = `Date: ${currentDate}`;
        doc.font('Helvetica-Bold').fillColor('black').fontSize(12).text(dateText, 50, doc.y, { align: 'right' });
        doc.moveDown();
        // Add content to the PDF
        doc.font('Helvetica-Bold').fontSize(18).fillColor('black').text('Employee Details Report', { align: 'center', bold: true });
        doc.underline(170, doc.y + 2, 250, 3);
        
        doc.moveDown();

        

        users.forEach(user => {
            doc.fontSize(10).text(`Name: ${user.name}`);
            doc.text(`EID: ${user.eid}`);
            doc.text(`NIC: ${user.nic}`);
            doc.text(`Gender: ${user.gender}`);
            doc.text(`Age: ${user.age}`);
            doc.text(`Address: ${user.address}`);
            doc.text(`Email: ${user.email}`);
            doc.text(`Job Title: ${user.jobtitle}`);
            doc.text(`Salary: ${user.actualSalary}\n\n`);
        });

        // Add total employees and total salaries to the document with different font sizes
        doc.text(`\n\n`);

        doc.fontSize(17).fillColor('black').text(`Total employees : ${totalEmployees}`, { align: 'left' });
        doc.fontSize(17).fillColor('black').text(`Total salary amount (Rs.) : ${totalSalaries}`, { align: 'left' })
        doc.fontSize(17).fillColor('black').text(`The total number of employees : ${totalEmployees}`, { align: 'left' });
        doc.fontSize(17).fillColor('black').text(`The sum of the total salaries : Rs. ${totalSalaries}`, { align: 'left' });




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
    .then(res => res.json(suppliers))
    .catch(err => res.json(err))
})
                                                        
app.post("/createUsersh", (req, res) =>{                              
    SupplierUserModel.create(req.body)
    .then(suppliers => res.json({ success: true, message: 'Supply  order added successfully', data: suppliers }))
    .catch(err => res.json({ success: false, message: 'Error adding order', error: err }))
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

        let totalPrice = 0;

        suppliers.forEach(supplier => {
            totalPrice += supplier.price;
        });

        // Create a new PDF document
        const doc = new PDFDocument();
         
        // Set up styling

        const stream = doc.pipe(fs.createWriteStream('weekly_material_report.pdf'));
        doc.rect(50, 50, 520, 30).fill('green'); 
        const text = 'ANAAWEI';
        const textWidth = doc.widthOfString(text);
        const x = 50 + (100 - textWidth) / 2;
        const y = 60;
        doc.font('Helvetica-BoldOblique').fillColor('white').fontSize(16).text(text, x, y, { align: 'center'});
        doc.font('Helvetica-Bold').fillColor('green').fontSize(10).text('Anaawei Holdings (PVT) LTD', 50, 90);
        doc.font('Helvetica-Bold').fontSize(10).text('288/5, Kiralabokkagama, Moragollagama', 50, 105);
        doc.font('Helvetica-Bold').fontSize(10).text('+94 769 850 663 / +94 719 267 777',50, 120);
        doc.font('Helvetica-Bold').fontSize(10).text('info@anaawei.com ',50, 135);
        doc.moveDown();
        doc.moveDown();
        

        const currentDate = new Date().toLocaleDateString('en-US', { timeZone: 'UTC' });
        const dateText = `Date: ${currentDate}`;

        doc.font('Helvetica-Bold').fillColor('black').fontSize(12).text(dateText, 50, doc.y, { align: 'left' });
        doc.moveDown();
        // Title
        doc.font('Helvetica-Bold').fontSize(18).fillColor('black').text('Supplied Materials Report', { align: 'center', bold: true });
        doc.underline(170, doc.y + 2, 250, 3);
       
    
        // Add content to the PDF
        doc.moveDown(2); // Add some vertical space after the title
        
        // Display each material and its total quantity in a table-like format
        
        doc.font('Helvetica-Bold').fontSize(12).text('Material Name', { continued: true,  width: 500, align: 'left' , bold: true });
        doc.font('Helvetica-Bold').text('Total Quantity (kg)', { width: 700, align: 'right', bold: true });
        doc.moveTo(50, doc.y + 10).lineTo(550, doc.y + 10).stroke(); // Draw horizontal line under the title
        doc.moveDown(); // Add some vertical space after the line
        doc.moveDown(); // Add some vertical space after the line
        
        for (const [materialname, quantitiy] of Object.entries(materialsQuantities)) {
            doc.font('Helvetica').fontSize(12).text(materialname, { width: 500, align: 'left' , continued: true });
            doc.font('Helvetica').text(quantitiy.toString(), { width: 700, align: 'right'  });
            doc.moveDown(); // Move to the next row
        }

        doc.moveDown(2); // Add some vertical space after the table-like content
        doc.font('Helvetica-Bold').fontSize(12).text('Total Price (Rs) =  ' + totalPrice.toString(), { align: 'left' });

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









//function machinery management
app.get('/machinary' ,(req,res) => {
    MachineUserModel.find({})
    .then(machines => res.json(machines))
    .catch(err => res.json(err))

})
app.get('/getUserla/:id' ,(req,res) => {
    const id = req.params.id;
    MachineUserModel.findById({_id:id})
    .then(machines => res.json(machines))
    .catch(err => res.json(err))

})
app.put('/updateUserla/:id',(req,res) => {
    const id = req.params.id;
    MachineUserModel.findByIdAndUpdate({_id:id} , {
        namel: req.body.namel,
        codel: req.body.codel ,
        datel: new Date (req.body.datel),
        returndate: new Date (req.body.returndate),
        pricel: req.body.pricel,
        statusl: req.body.statusl,

    })

    .then(machines => res.json(machines))
    .catch(err => res.json(err))

})
app.delete('/deleteUserla/:id' ,(req,res) => {
    const id = req.params.id;
    MachineUserModel.findByIdAndDelete({_id: id})
    .then(res => res.json(machines))
    .catch(err => res.json(err))
})

app.post("/createUserla", (req, res) =>{
    MachineUserModel.create(req.body)
    .then(machines => res.json(machines))
    .catch(err => res.json(err))
})

// Search  by code
app.get('/searchMachineByCode', (req, res) => {
    const { codel } = req.query;
   
    MachineUserModel.find({codel }) // Find repairs with the specified code
        .then(machines => {
            res.json(machines); // Return the matching repairs 
        })
        .catch(err => {
            res.status(500).json({ error: 'Server error' });
        });
});


//function distributor  management
app.get('/distributor' ,(req,res) => {
    DistributorUserModel.find({})
    .then(distributors => res.json(distributors))
    .catch(err => res.json(err))

})
app.get('/getUserds/:id' ,(req,res) => {
    const id = req.params.id;
    DistributorUserModel.findById({_id:id})
    .then(distributors => res.json(distributors))
    .catch(err => res.json(err))

})
app.put('/updateUserds/:id',(req,res) => {
    const id = req.params.id;
    DistributorUserModel.findByIdAndUpdate({_id:id} , {
        named: req.body.named,
        did: req.body. did ,
        addressd: req.body.addressd,
        materiald: req.body. materiald,
        dated: new Date (req.body.dated),
        quantityd: req.body. quantityd,
        statusd: req.body.statusd,

    })

    .then(distributors => res.json(distributors))
    .catch(err => res.json(err))

})
app.delete('/deleteUserds/:id' ,(req,res) => {
    const id = req.params.id;
    DistributorUserModel.findByIdAndDelete({_id: id})
    .then(res => res.json(distributors))
    .catch(err => res.json(err))
})

app.post("/createUserds", (req, res) =>{
    DistributorUserModel.create(req.body)
    .then(distributors => res.json(distributors))
    .catch(err => res.json(err))
})

// Search  by code
app.get('/searchDistributorByDid', (req, res) => {
    const {  did } = req.query;
   
    DistributorUserModel.find({ did }) // Find repairs with the specified code
        .then(distributors => {
            res.json(distributors); // Return the matching repairs 
        })
        .catch(err => {
            res.status(500).json({ error: 'Server error' });
        });
});

//functions for production managemnet




app.get('/supplier-details' ,(req,res) => {
    SupplierdetailUserModel.find({})
    .then(supplierdetails => res.json(supplierdetails))
    .catch(err => res.json(err))

})
app.get('/getUsersi/:id' ,(req,res) => {
    const id = req.params.id;
    SupplierdetailUserModel.findById({_id:id})
    .then(supplierdetails => res.json(supplierdetails))
    .catch(err => res.json(err))

})
app.put('/updateUsersi/:id',(req,res) => {
    const id = req.params.id;
    SupplierdetailUserModel.findByIdAndUpdate({_id:id} , {
        namesi: req.body. namesi,
        sidsi: req.body.sidsi ,
        addressi: req.body. addressi,
        emailsi: req.body.emailsi ,
        contactsi: req.body.contactsi,
       

    })

    .then(supplierdetails => res.json(supplierdetails))
    .catch(err => res.json(err))

})
app.delete('/deleteUsersi/:id' ,(req,res) => {
    const id = req.params.id;
    SupplierdetailUserModel.findByIdAndDelete({_id: id})
    .then(res => res.json(supplierdetails))
    .catch(err => res.json(err))
})

app.post("/createUsersi", (req, res) =>{
    SupplierdetailUserModel.create(req.body)
    .then(supplierdetails => res.json(supplierdetails))
    .catch(err => res.json(err))
})


// Search user by SID
app.get('/searchSupplierBySids', (req, res) => {
    const { sidsi } = req.query;
   
    SupplierdetailUserModel.find({sidsi }) // Find supplier orders with the specified SID
        .then(supplierdetails => {
            res.json(supplierdetails); // Return the matching supplier orders
        })
        .catch(err => {
            res.status(500).json({ error: 'Server error' });
        });
});



app.get('/products' ,(req,res) => {


    // Querying the database to get products
    ProductModel.find({})
        .then(products => res.json(products))
        .catch(err => res.json(err));
});



app.get('/batches' ,(req,res) => {
    BatchModel.find({})
    .then(batches => res.json(batches))
    .catch(err => res.json(err))

})

app.get('/schedule' ,(req,res) => {
    BatchModel.find({})
    .then(schedule => res.json(schedule))
    .catch(err => res.json(err))

})





app.get('/getProduct/:id' ,(req,res) => {
    const id = req.params.id;
    ProductModel.findById({_id:id})
  
    .then(products => res.json(products))
    .catch(err => res.json(err))

})

app.get('/getBatch/:id' ,(req,res) => {
    const id = req.params.id;
    BatchModel.findById({_id:id})
    .then(batches => res.json(batches))
    .catch(err => res.json(err))

})




const str = "Fri Feb 08 2013 09:47:57 GMT +0530 (IST)";
const date = new Date(str);


const day = date.getDate(); 
const month = date.getMonth(); 
const year = date.getFullYear(); 

console.log(`Extracted date: ${year}-${month + 1}-${day}`);





app.put('/updateProduct/:id',(req,res) => {
    const id = req.params.id;
    ProductModel.findByIdAndUpdate({_id:id} , {
        fruittype: req.body.fruittype,
        manufacturedate: req.body.manufacturedate,
        expiredate: req.body.  expiredate,
        quantity: req.body.quantity ,
        price: req.body.price,
        
    })
    .then(products => res.json(products))
    .catch(err => res.json(err))

})

app.put('/updateBatch/:id',(req,res) => {
    const id = req.params.id;
    BatchModel.findByIdAndUpdate({_id:id} , {
        fruittype: req.body.fruittype,
        manufacturedate: req.body.manufacturedate,
        quantity: req.body.quantity ,
        
        
    })
    .then(batches => res.json(batches))
    .catch(err => res.json(err))

})

app.put('/updateschedule/:id',(req,res) => {
    const id = req.params.id;
    ScheduleModel.findByIdAndUpdate({_id:id} , {
        fruittype: req.body.fruittype,
        date: req.body.date,
        quantity: req.body.quantity ,
        time:req.body.time,
        
        
    })
    .then(schedule => res.json(schedule))
    .catch(err => res.json(err))

})


app.delete('/deleteProduct/:id' ,(req,res) => {
    const id = req.params.id;
    ProductModel.findByIdAndDelete({_id: id})
    .then(res => res.json(s))
    .catch(err => res.json(err))



})

app.delete('/deleteBatch/:id' ,(req,res) => {
    const id = req.params.id;
    BatchModel.findByIdAndDelete({_id: id})
    .then(res => res.json(s))
    .catch(err => res.json(err))



})

app.delete('/deleteschedule/:id' ,(req,res) => {
    const id = req.params.id;
    ScheduleModel.findByIdAndDelete({_id: id})
    .then(res => res.json(s))
    .catch(err => res.json(err))



})



app.post("/createProduct", (req, res) =>{
    ProductModel.create(req.body)
    .then(products => res.json(products))
    .catch(err => res.json(err))

})

app.post("/createBatch", (req, res) =>{
    BatchModel.create(req.body)
    .then(batches => res.json(batches))
    .catch(err => res.json(err))

})

app.post("/createschedule", (req, res) =>{
    BatchModel.create(req.body)
    .then(schedule => res.json(schedule))
    .catch(err => res.json(err))

})




//Search  product by name

app.get('/searchProductByFruitType', (req,res) =>  {
  const {fruitype} = req.query;

  ProductModel.find({ fruittype})  // find product by fruittype
    .then(products => {
      res.json(products);
    })

    .catch(err => {

        res.status(500).json({ error: 'Server error'});
    })



})


  // Search batch

 

app.get('/searchBatchByFruitType', (req,res) =>  {
    const {fruitype} = req.query;
  
    ProductModel.find({ fruittype})  // find product by fruittype
      .then(products => {
        res.json(products);
      })
  
      .catch(err => {
  
          res.status(500).json({ error: 'Server error'});
      })
  
  
  
  })
  









app.get('/ProductDetailsReport', async (req, res) => {
    try {
        // Fetch all products from the database
        const products = await ProductModel.find({});

       
        // Get the total number of products
        const totalProducts = products.length;

        // Create a new PDF document
        const doc = new PDFDocument();
      
        // Pipe the PDF to a writable stream
        const stream = doc.pipe(fs.createWriteStream('product_report.pdf'));
        doc.rect(50, 50, 520, 30).fill('green'); 
        const text = 'ANAAWEI';
        const textWidth = doc.widthOfString(text);
        const x = 50 + (100 - textWidth) / 2;
        const y = 60;
        doc.font('Helvetica-BoldOblique').fillColor('white').fontSize(16).text(text, x, y, { align: 'center'});
        doc.font('Helvetica-Bold').fillColor('green').fontSize(10).text('Anaawei Holdings (PVT) LTD', 50, 90);
        doc.font('Helvetica-Bold').fontSize(10).text('288/5, Kiralabokkagama, Moragollagama', 50, 105);
        doc.font('Helvetica-Bold').fontSize(10).text('+94 769 850 663 / +94 719 267 777',50, 120);
        doc.font('Helvetica-Bold').fontSize(10).text('info@anaawei.com ',50, 135);
        doc.moveDown();
        doc.moveDown();
      

        const currentDate = new Date().toLocaleDateString('en-US', { timeZone: 'UTC' });
        const dateText = `Date: ${currentDate}`;
        doc.font('Helvetica-Bold').fillColor('black').fontSize(12).text(dateText, 50, doc.y, { align: 'left' });
        doc.moveDown();

        // Add content to the PDF
        doc.font('Helvetica-Bold').fontSize(20).fillColor('black').text('Product Details Report\n\n',{ align: 'left', bold: true });
        products.forEach(product => {
            doc.fontSize(10).text(`FruitType: ${product.fruittype}`);
            doc.text(`ManufactureDate: ${product.manufacturedate}`);
            doc.text(`ExpireDate: ${product.expiredate}`);
            doc.text(`Quantity: ${product.quantity}`);
            doc.text(`Price: ${product.price}\n\n`);
       
        });
      




       
        doc.text(`\n\n`);
        doc.fontSize(17).fillColor('black').text(`Total Products: ${totalProducts}`, { align: 'left' });
       
        

        // Finalize the PDF
        doc.end();

        // Send the PDF file as a response
        stream.on('finish', () => {
            res.download('product_report.pdf', 'product_report.pdf', (err) => {
                if (err) {
                    console.error('Error downloading PDF:', err);
                    res.status(500).json({ message: 'Error downloading PDF' });
                }
                // Delete the PDF file after it's sent
                fs.unlinkSync('product_report.pdf');
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
