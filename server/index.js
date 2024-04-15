 const express =require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const fs = require('fs');
const PDFDocument = require('pdfkit');



const ProductModel = require('./models/Products')
const BatchModel = require('./models/Batches')

const app = express()
app.use(cors())
app.use(express.json())


mongoose.connect("mongodb+srv://all:all123@cluster0.j8vsstt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

app.get('/products' ,(req,res) => {
    ProductModel.find({})
    .then(products => res.json(products))
    .catch(err => res.json(err))

})

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


app.get('/getSchedule/:id' ,(req,res) => {
    const id = req.params.id;
    ScheduleModel.findById({_id:id})
    .then(schedule => res.json(schedule))
    .catch(err => res.json(err))

})







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
        // Fetch all employees from the database
        const products = await ProductModel.find({});

       
        // Get the total number of employees
        const totalProducts = products.length;

        // Create a new PDF document
        const doc = new PDFDocument();
      
        // Pipe the PDF to a writable stream
        const stream = doc.pipe(fs.createWriteStream('product_report.pdf'));

        // Add content to the PDF
        doc.fontSize(20).fillColor('black').text('Product Details Report\n\n');
        products.forEach(product => {
            doc.fontSize(10).text(`FruitType: ${product.fruittype}`);
            doc.text(`ManufactureDate: ${product.manufacturedate}`);
            doc.text(`ExpireDate: ${product.expiredate}`);
            doc.text(`Quantity: ${product.quantity}`);
            doc.text(`Price: ${product.price}`);
       
        });

        // Add total employees and total salaries to the document with different font sizes
        doc.text(`\n\n`);
        doc.fontSize(17).fillColor('black').text(`Total Products: ${totalProducts}`, { align: 'left' });
       // doc.fontSize(17).fillColor('black').text(`Total Salaries: Rs. ${totalSalaries}`, { align: 'left' });
        

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



app.get('/BatchDetailsReport', async (req, res) => {
    try {
        // Fetch all employees from the database
        const batchess = await BatchModel.find({});

       
        // Get the total number of employees
        const totalbatches = batches.length;

        // Create a new PDF document
        const doc = new PDFDocument();
      
        // Pipe the PDF to a writable stream
        const stream = doc.pipe(fs.createWriteStream('batch_report.pdf'));

        // Add content to the PDF
        doc.fontSize(20).fillColor('black').text('Batch Details Report\n\n');
        batches.forEach(batch => {
            doc.fontSize(10).text(`FruitType: ${batch.fruittype}`);
            doc.text(`ManufactureDate: ${batch.manufacturedate}`);
           doc.text(`Quantity: ${batch.quantity}`);
          
       
        });

        // Add total employees and total salaries to the document with different font sizes
        doc.text(`\n\n`);
        doc.fontSize(17).fillColor('black').text(`Total Products: ${totalBatches}`, { align: 'left' });
       // doc.fontSize(17).fillColor('black').text(`Total Salaries: Rs. ${totalSalaries}`, { align: 'left' });
        

        // Finalize the PDF
        doc.end();

        // Send the PDF file as a response
        stream.on('finish', () => {
            res.download('batch_report.pdf', 'batch_report.pdf', (err) => {
                if (err) {
                    console.error('Error downloading PDF:', err);
                    res.status(500).json({ message: 'Error downloading PDF' });
                }
                // Delete the PDF file after it's sent
                fs.unlinkSync('batch_report.pdf');
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
