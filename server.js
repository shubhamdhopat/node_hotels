const express = require('express');
const app = express();
const db = require('./db');  
const bodyParser = require('body-parser');
app.use(bodyParser.json());//req.body

app.get('/', function (req, res) {
  res.send('Welcome to this hotel....,we have list of menus');
});

//Import the router file 
const personRoutes=require('./routes/personRoutes');
const  menuItemRoutes=require('./routes/menuItemRoutes');

//Use the router
app.use('/person', personRoutes);
app.use('/menu', menuItemRoutes);

app.listen(3000, () => {
  console.log("Server is running");
});
