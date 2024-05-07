const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const fs = require('fs');
const PDFDocument = require('pdfkit');

const UserModelm = require('./models/Stock')
const UserModelsm = require('./models/Moves')
const UserModel = require('./models/Users')
const AttendanceModel = require('./models/Attendances')
const SupplierUserModel = require('./models/Suppliers')
const LoginModel = require('./models/Login')
const MachineUserModel = require('./models/Machines')
const DistributorUserModel = require('./models/Distributors')



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
        const totalSalaries = users.reduce((total, user) => total + user.salary, 0);

        // Get the total number of employees
        const totalEmployees = users.length;

        // Create a new PDF document
        const doc = new PDFDocument();


        // Pipe the PDF to a writable stream
        const stream = doc.pipe(fs.createWriteStream('employee_report.pdf'));
        doc.rect(50, 50, 500, 30).fill('#F4BB29'); 
        const text = 'ANAAWEI';
        const textWidth = doc.widthOfString(text);
        const x = 50 + (100 - textWidth) / 2;
        const y = 60;
        doc.font('Helvetica-BoldOblique').fillColor('white').fontSize(16).text(text, x, y, { align: 'left'});
        
        doc.moveDown();
        doc.moveDown();
        doc.moveDown();
        // Add content to the PDF

        doc.font('Helvetica-Bold').fontSize(20).fillColor('black').text('Employee Details Report', { align: 'left', bold: true });
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
            doc.text(`Salary: ${user.salary}\n\n`);
        });

        // Add total employees and total salaries to the document with different font sizes
        doc.text(`\n\n`);
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
        doc.rect(50, 50, 500, 30).fill('#F4BB29'); 
        const text = 'ANAAWEI';
        const textWidth = doc.widthOfString(text);
        const x = 50 + (100 - textWidth) / 2;
        const y = 60;
        doc.font('Helvetica-BoldOblique').fillColor('white').fontSize(16).text(text, x, y, { align: 'left'});
        
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



//////////////stock section
app.get("/stocksmt" , (req,res) => {
    UserModelm.find({})
        .then(stocks => res.json(stocks))
        .catch(err => res.json(err))
})
app.get('/getstockM/:id' , (req,res) =>{
    const id = req.params.id;
    UserModelm.findById({_id:id})
        .then(stocks => res.json(stocks))
        .catch(err => res.json(err))
})
app.put('/updatemt/:id' , (req,res) => {
    const id = req.params.id;
    UserModelm.findByIdAndUpdate({_id:id},{
        code:req.body.code ,
        namem:req.body.namem,
        des:req.body.des,
        qty:req.body.qty,
        type:req.body.type })

        .then(stocks => res.json(stocks))
        .catch(err => res.json(err))
})

app.delete('/deleteitem/:id' , (req,res) =>{
    const id = req.params.id;
    UserModelm.findByIdAndDelete({_id:id})
        .then(res => res.json(res))
        .catch(err => res.json(err))



})
app.post("/CreateMT" , (req,res) => {
    UserModelm.create(req.body)
        .then(stocks => res.json(stocks))
        .catch(err => res.json(err))
})

app.get('/searchItemByCode', (req, res) => {
    const { code } = req.query;

    UserModelm.find({code}) // Find users with the specified EID
        .then(stocks => {
            res.json(stocks); // Return the matching users
        })
        .catch(err => {
            res.status(500).json({ error: 'Server error' });
        });
});


//report

app.get('/stock-details', async (req, res) => {
    try {
        // Fetch all employees from the database
        const stocksMT = await UserModelm.find({});

        // Calculate total salaries
        const Total = stocksMT.reduce((total, stocks) => total + stocks.qty, 0);

        // Get the total number of employees
        const totalItems = stocksMT.length;

        // Create a new PDF document
        const doc = new PDFDocument();



        // Pipe the PDF to a writable stream
        const stream = doc.pipe(fs.createWriteStream('monthly-stock-report.pdf'));
        doc.rect(50, 50, 500, 30).fill('#F4BB29');
        const text = 'ANAAWEI';
        const textWidth = doc.widthOfString(text);
        const x = 50 + (100 - textWidth) / 2;
        const y = 60;
        //---

        //


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
        doc.font('Helvetica-Bold').fontSize(18).fillColor('black').text('Stock Summery Report', { align: 'center'  });
        doc.underline(170, doc.y + 2, 250, 3);


        //---


        // Add content to the PDF

        doc.moveDown();
        doc.moveDown();




        // Define an object to store totals for each code
        const codeTotals = {};

// Loop through the stocksMT array to calculate totals
        stocksMT.forEach(stocks => {
            // If the code is not already in codeTotals, initialize it with quantity 0
            if (!codeTotals[stocks.code]) {
                codeTotals[stocks.code] = 0;
            }
            // Add the quantity of the current stock to the total for its code
            codeTotals[stocks.code] += stocks.qty;

//--


            //--
            // Print individual stock information
            //doc.fontSize(10).text(`Code: ${stocks.code}`);
            //doc.fontSize(10).text(`Name: ${stocks.namem}`);
            //doc.text(`Type: ${stocks.type}`);
           /// doc.text(`Quantity: ${stocks.qty}`);
            //doc.text(`\n\n`);
        });

// Now codeTotals object contains totals for each code
// Loop through codeTotals to calculate overall total and print
        let overallTotal = 0;
        for (const code in codeTotals) {
            overallTotal += codeTotals[code];

            // Find the name associated with the code
            // Find the name associated with the code
            const stock = stocksMT.find(stock => stock.code === code);
            const namem = stock ? stock.namem : 'Unknown';

            doc.moveDown();

            // Calculate the width of the text
            const nameWidth = doc.widthOfString(`Total for ${namem}:`);
            const totalWidth = doc.widthOfString(`${codeTotals[code]} Kg`);

            // Calculate the x-coordinate for the total text
            const totalX = 450 - totalWidth; // Assuming the total width of the page is 600 and there is some margin

            // Print the text with appropriate alignment
            doc.fontSize(12).fillColor('black').text(`quantity of ${namem}:`, 50, doc.y, { align: 'left', width: nameWidth });
            doc.text(`${codeTotals[code]} Kg`, totalX, doc.y, { align: 'right', width: totalWidth });

            // Move to the next line
        }
        doc.text(`\n\n`);




        // Finalize the PDF
        doc.end();


        // Send the PDF file as a response
        stream.on('finish', () => {
            res.download('monthly-stock-report.pdf', 'monthly-stock-report.pdf', (err) => {
                if (err) {
                    console.error('Error downloading PDF:', err);
                    res.status(500).json({ message: 'Error downloading PDF' });
                }
                // Delete the PDF file after it's sent
                fs.unlinkSync('monthly-stock-report.pdf');
            });
        });
    } catch (error) {
        console.error('Error generating PDF report:', error);
        res.status(500).json({ message: 'Error generating PDF report' });
    }
});



//////////////movement section
app.get("/stocksSM" , (req,res) => {
    UserModelsm.find({})
        .then(stocksM => res.json(stocksM))
        .catch(err => res.json(err))
})
app.get('/getstockSM/:id' , (req,res) =>{
    const id = req.params.id;
    UserModelsm.findById({_id:id})
        .then(stocksM => res.json(stocksM))
        .catch(err => res.json(err))
})
app.put('/updatesm/:id' , (req,res) => {
    const id = req.params.id;
    UserModelsm.findByIdAndUpdate({_id:id},{
        code:req.body.code ,
        date:req.body.date,
        mqty:req.body.mqty,
        cqty:req.body.cqty,
        type:req.body.type })

        .then(stocksM => res.json(stocksM))
        .catch(err => res.json(err))
})

app.delete('/deleteitemsm/:id' , (req,res) =>{
    const id = req.params.id;
    UserModelsm.findByIdAndDelete({_id:id})
        .then(res => res.json(res))
        .catch(err => res.json(err))



})
app.post("/CreateSM" , (req,res) => {
    UserModelsm.create(req.body)
        .then(stocksM => res.json(stocksM))
        .catch(err => res.json(err))
})

app.get('/searchItemByCode', (req, res) => {
    const {code } = req.query;

    UserModelsm.find({code}) // Find users with the specified EID
        .then(stocksM => {
            res.json(stocksM); // Return the matching users
        })
        .catch(err => {
            res.status(500).json({ error: 'Server error' });
        });
});
app.get('/movement-details', async (req, res) => {
    try {
        // Fetch all movements from the database
        const movements = await UserModelsm.find({});

        // Define an object to store total moved quantity for each code
        const codeTotals = {};

        // Loop through the movements array to calculate totals
        movements.forEach(movement => {
            // If the code is not already in codeTotals, initialize it with quantity 0
            if (!codeTotals[movement.code]) {
                codeTotals[movement.code] = 0;
            }
            // Add the moved quantity of the current movement to the total for its code
            codeTotals[movement.code] += movement.mqty;
        });

        // Create a new PDF document
        const doc = new PDFDocument();

        // Pipe the PDF to a writable stream
        const stream = doc.pipe(fs.createWriteStream('monthly-movement-report.pdf'));
        doc.rect(50, 50, 500, 30).fill('#F4BB29');
        const text = 'ANAAWEI';
        const textWidth = doc.widthOfString(text);
        const x = 50 + (100 - textWidth) / 2;
        const y = 60;

        // Add content to the PDF
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
        doc.font('Helvetica-Bold').fontSize(18).fillColor('black').text('Stock Movement Report', { align: 'center'  });
        doc.underline(170, doc.y + 2, 250, 3);
        doc.moveDown();
        doc.moveDown();

        // Add your content here...

        // Loop through codeTotals to print total moved quantity for each code
        for (const code in codeTotals) {
            // Find the name associated with the code
            const movement = movements.find(movement => movement.code === code);
            const name = movement ? movement.namem : 'Unknown';

            // Calculate the width of the text
            const nameWidth = doc.widthOfString(`Total moved quantity of ${name}:`);
            const totalWidth = doc.widthOfString(`${codeTotals[code]} Kg`);

            // Calculate the x-coordinate for the total text
            const totalX = 550 - totalWidth; // Assuming the total width of the page is 600 and there is some margin

            // Print the text with appropriate alignment
            doc.fontSize(12).fillColor('black').text(`Total moved quantity of ${code}:`, 50, doc.y, { align: 'left', width: nameWidth });
            doc.text(`${codeTotals[code]} Kg`, totalX, doc.y, { align: 'right', width: totalWidth });

            // Move to the next line
            doc.moveDown();
        }

        // Finalize the PDF
        doc.end();

        // Send the PDF file as a response
        stream.on('finish', () => {
            res.download('monthly-movement-report.pdf', 'monthly-movement-report.pdf', (err) => {
                if (err) {
                    console.error('Error downloading PDF:', err);
                    res.status(500).json({ message: 'Error downloading PDF' });
                }
                // Delete the PDF file after it's sent
                fs.unlinkSync('monthly-movement-report.pdf');
            });
        });
    } catch (error) {
        console.error('Error generating PDF report:', error);
        res.status(500).json({ message: 'Error generating PDF report' });
    }
});




//report

app.get('/movement-details', async (req, res) => {
    try {
        // Fetch all employees from the database
        const stocksM = await UserModelsm.find({});

        // Calculate total salaries
        const Total = stocksM.reduce((total, stocksM) => total + stocksM.cqty, 0);
        const Total2 = stocksM.reduce((total, stocksM) => total + stocksM.mqty, 0);

        // Get the total number of employees
        const totalItems = stocksM.length;

        // Create a new PDF document
        const doc = new PDFDocument();



        // Pipe the PDF to a writable stream
        const stream = doc.pipe(fs.createWriteStream('monthly-stock-report.pdf'));
        doc.rect(50, 50, 500, 30).fill('#F4BB29');
        const text = 'ANAAWEI';
        const textWidth = doc.widthOfString(text);
        const x = 50 + (100 - textWidth) / 2;
        const y = 60;
        //---

        //


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
        doc.font('Helvetica-Bold').fontSize(18).fillColor('black').text('Stock Summery Report', { align: 'center'  });
        doc.underline(170, doc.y + 2, 250, 3);


        //---


        // Add content to the PDF

        doc.moveDown();
        doc.moveDown();




        // Define an object to store totals for each code
        const codeTotals = {};

// Loop through the stocksMT array to calculate totals
        stocksM.forEach(stocksM => {
            // If the code is not already in codeTotals, initialize it with quantity 0
            if (!codeTotals[stocksM.code]) {
                codeTotals[stocksM.code] = 0;
            }
            // Add the quantity of the current stock to the total for its code
            codeTotals[stocksM.code] += stocksM.qty;

//--


            //--
            // Print individual stock information
            //doc.fontSize(10).text(`Code: ${stocks.code}`);
            //doc.fontSize(10).text(`Name: ${stocks.namem}`);
            //doc.text(`Type: ${stocks.type}`);
            /// doc.text(`Quantity: ${stocks.qty}`);
            //doc.text(`\n\n`);
        });

// Now codeTotals object contains totals for each code
// Loop through codeTotals to calculate overall total and print
        let overallTotal = 0;
        for (const code in codeTotals) {
            overallTotal += codeTotals[code];

            // Find the name associated with the code
            // Find the name associated with the code
            const stock = stocksMT.find(stock => stock.code === code);
            const namem = stock ? stock.namem : 'Unknown';

            doc.moveDown();

            // Calculate the width of the text
            const nameWidth = doc.widthOfString(`Total for ${namem}:`);
            const totalWidth = doc.widthOfString(`${codeTotals[code]} Kg`);

            // Calculate the x-coordinate for the total text
            const totalX = 450 - totalWidth; // Assuming the total width of the page is 600 and there is some margin

            // Print the text with appropriate alignment
            doc.fontSize(12).fillColor('black').text(`quantity of ${namem}:`, 50, doc.y, { align: 'left', width: nameWidth });
            doc.text(`${codeTotals[code]} Kg`, totalX, doc.y, { align: 'right', width: totalWidth });

            // Move to the next line
        }
        doc.text(`\n\n`);




        // Finalize the PDF
        doc.end();


        // Send the PDF file as a response
        stream.on('finish', () => {
            res.download('monthly-stock-report.pdf', 'monthly-stock-report.pdf', (err) => {
                if (err) {
                    console.error('Error downloading PDF:', err);
                    res.status(500).json({ message: 'Error downloading PDF' });
                }
                // Delete the PDF file after it's sent
                fs.unlinkSync('monthly-stock-report.pdf');
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
