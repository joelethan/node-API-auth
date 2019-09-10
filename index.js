const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Connect tp DB
mongoose.connect('mongodb+srv://joel:166091mongodb@cluster0-qwjvn.mongodb.net/test?retryWrites=true&w=majority',
{ useUnifiedTopology: true },
()=> console.log('Connected to DB'));


// Import Routes
const authRoute = require('./routes/auth');

// Route Middlewares
app.use('/api/user', authRoute);

app.listen(3000, ()=>console.log('Serve Up and Running'));
