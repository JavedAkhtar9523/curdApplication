require('dotenv').config();
const express=require('express');
const mongoose=require('mongoose');
const User=require('./models/userSchema');
const cors=require('cors');
require('./db/conn');
const router=require('./routes/router');

const app=express();


app.use(cors());
app.use(express.json());
app.use(router);

app.listen(5000,()=>{console.log('server is up at port number 5000')});