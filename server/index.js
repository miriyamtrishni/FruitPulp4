const express =require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/Users')
const UserModelm = require('./models/Stock')
const fs = require('fs');
const PDFDocument = require('pdfkit');
const app = express()
app.use(cors())
app.use(express.json())


//mongoose.connect("mongodb+srv://shaini:lisa%40123@cluster0.j8vsstt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
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


app.delete('/deleteUser/:id' ,(req,res) => {
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id: id})
        .then(res => res.json(users))
        .catch(err => res.json(err))



})






app.post("/createUser", (req, res) =>{
    UserModel.create(req.body)
        .then(users => res.json(users))
        .catch(err => res.json(err))




})

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
        doc.font('Helvetica-BoldOblique').fillColor('white').fontSize(16).text(text, x, y, { align: 'left'});

        doc.moveDown();
        doc.moveDown();
        doc.moveDown();
        // Add content to the PDF

        doc.font('Helvetica-Bold').fontSize(15).fillColor('black').text('Item Details ', { align: 'left', bold: true });
        doc.moveDown();



        stocksMT.forEach(stocks => {

            doc.fontSize(10).text(`Code: ${stocks.code}`);
            doc.fontSize(10).text(`Name: ${stocks.namem}`);
            doc.text(`Description: ${stocks.des}`);
            doc.text(`Type: ${stocks.type}`);
            doc.text(`Quantity: ${stocks.qty}`);
            doc.text(`\n\n`);


        });

        // Add total employees and total salaries to the document with different font sizes
        doc.text(`\n\n`);
        doc.fontSize(15).fillColor('black').text(`Total Items: ${totalItems}`, { align: 'left' });
        doc.fontSize(15).fillColor('black').text(`Total :   ${Total} Kg` , { align: 'left' });
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






app.listen(3001, () => {

    console.log("server is running")
})
