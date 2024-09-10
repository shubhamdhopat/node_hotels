const mongoose = require('mongoose');
require('dotenv').config();


//Define the MongoDB connection URL
const mongoURL =process.env.MONGODB_URL_LOCAL; //Replace 'mydatabase' with your database name
// const mongoURL =process.env.MONGODB_URL; 

mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//Get the default connection
//Mongoose maintains the default connection object representing the MongoDB connection
const db=mongoose.connection;

//Define Event Listners for database Connection
db.on('connected',() => {
console.log("connected to MongoDB server");
}
)
db.on('error',(err) => {
console.log("MongoDB connection errror:",err);
}
)
db.on('disconnected',() => {
console.log("MongoDB diconnected ");
}
)
