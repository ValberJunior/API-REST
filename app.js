require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const whiteList = {origin: '0.0.0.0/0'};

const userRouter = require('./routes/userRouter');
const adminRouter = require('./routes/adminRouter')

//mongoose
mongoose.connect(process.env.MONGO_CONNECTION_URL,{ useNewUrlParser: true, useUnifiedTopology: true}, (err)=>{
   if(err) {
       console.log(err)}
       else{
           console.log("Mongo Connected")
       }
});

app.use('/user', express.json(), userRouter);

//Proteger uma rota para que não seja acessível para todos:
app.use('/admin', express.json(), adminRouter);

app.use(cors(whiteList));

app.listen(process.env.PORT, ()=>{
    console.log("Server Running...")
})