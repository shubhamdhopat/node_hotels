const mongoose = require('mongoose');
const bcrypt= require('bcrypt');

// Define the person schema
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    work: {
        type: String,
        enum: ['chef', 'waiter', 'manager'],
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    address: {
        type: String
    },
    salary: {
        type: Number,
        required: true
    },
    username: {
        required:true,
        type: String
    },
    password: {
        required: true,
        type: String
    }
});

personSchema.pre('save',async function (next) {
    const person=this;
    //Hash the password only if it has been modified or (new record)
    if (!person.isModified('password')) return next();
    try {
        //hash password generation
        const salt = await bcrypt.genSalt(10); //generating random 10 number salt

        //hash password
        const hashedpassword = await bcrypt.hash(person.password, salt);

        //Override the palin password with hashed one
        person.password=hashedpassword;
        
        next();
        
    } catch (error) {
        return next(err);
    }
})


personSchema.methods.comparePassword =async function(candidatePassword) {
    try {
        const isMatch = await bcrypt.compare(candidatePassword, this.password);
        return isMatch;
    } catch (err) {
        throw err;
    }
}
// Create person model
const Person = mongoose.model('Person', personSchema);
module.exports = Person;
