const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const shortid=require('shortid');
const sampleControllers = require('./src/controllers/sample.controllers');

const app = express();

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/sample-db');

app.post('/data',sampleControllers.getdata);
app.post('/add',sampleControllers.putdata);
app.listen(3000);