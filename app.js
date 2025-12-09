const express = require('express');
const mongoose = require('mongoose');

// Connexion à MongoDB via Mongoose
mongoose.connect('mongodb+srv://sk20:sowukelly@cluster0.rksxlhb.mongodb.net/?appName=Cluster0')
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

const usersRoute = require('./routes/user');
const taskRoute = require('./routes/task');
const hrllo = require('./routes/hello');

app.use('/api/user', usersRoute);
app.use('/api/task', taskRoute);
app.use(hrllo);

module.exports = app;