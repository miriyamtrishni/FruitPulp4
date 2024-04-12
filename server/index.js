const express =require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/Users')
const UserModelm = require('./models/Stock')

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
    app.get("/userMT" , (req,res) => {
        UserModelm.find({})
            .then(stocks => res.json(stocks))
            .catch(err => res.json(err))
    })
    app.get('/getUserM/:id' , (req,res) =>{
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
    app.listen(3001,() => {

        console.log("server is running")
    })