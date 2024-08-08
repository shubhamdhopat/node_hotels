const mongoose = require('mongoose');
require('dotenv').config();


//Define the MongoDB connection URL
// const mongoURL ='mongodb://localhost:27017/hotels' //Replace 'mydatabase' with your database name
const mongoURL =process.env.MONGODB_URL; 

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
