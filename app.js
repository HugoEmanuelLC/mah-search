const express = require('express');
// const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config(); 
const PORT = process.env.PORT || 3001;
// const dbURI = process.env.MONGODB_URI || process.env.DB_URI
const dbURI = process.env.DB_URI
const authRoutes = require('./routes/authRoutes');
const companieRouter = require('./routes/companiesRoutes');
const cookieParser = require('cookie-parser');
const { requireAuth, checkUser } = require('./middleware/authMiddleware');

const app = express();

// middleware
// app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

// view engine
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// database connection
const useNewUrlParser = true;
const useUnifiedTopology = true;
MongoClient.connect(dbURI, { useNewUrlParser, useUnifiedTopology }, (err, client) =>{
  if (err) {
    console.error(err);
  } else {
    app.listen(PORT)
    console.log("server en ligne");
  }
})

// routes
app.get('*', checkUser);
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', requireAuth, (req, res) => res.render('smoothies'));
app.use(authRoutes);
app.use(checkUser, companieRouter);

//module.exports = app