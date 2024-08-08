const express = require('express');
const app = express();
const db = require('./db');  
require('dotenv').config();
const bodyParser = require('body-parser');
app.use(bodyParser.json());//req.body
const PORT=process.env.PORT || 3000;//IF PORT VALUE IS PRESENT IN process.env.port then it will use that or by default it will used 3000

app.get('/', function (req, res) {
  res.send('Welcome to this hotel....,we have list of menus');
});


//Import the router file 
const personRoutes=require('./routes/personRoutes');
const  menuItemRoutes=require('./routes/menuItemRoutes');

//Use the router
app.use('/person', personRoutes);
app.use('/menu', menuItemRoutes);



app.listen(PORT, () => {
  console.log("Server is running");
});
