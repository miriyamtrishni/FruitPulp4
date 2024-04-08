 const express =require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/Users')
const SupplierUserModel = require('./models/Suppliers')


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





app.listen(3001,() => {

    console.log("server is running")
})
