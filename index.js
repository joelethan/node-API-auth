const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

// Connect tp DB
mongoose.connect(process.env.DB_CONNECT,
{ useUnifiedTopology: true },
()=> console.log('Connected to DB'));


// Import Routes
const authRoute = require('./routes/auth');

// Middlewares
app.use(express.json());

// Route Middlewares
app.use('/api/user', authRoute);

app.listen(3000, ()=>console.log('Serve Up and Running'));
