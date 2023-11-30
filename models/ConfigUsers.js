const mongoose = require('mongoose');
const { isEmail } = require('validator');

const Schema = new mongoose.Schema({
    email:{
        type: String,
        require: [true, 'Please enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    password: {
        type: String,
        require: [true, 'Please enter an password'],
        minLength: [6, 'Minimun password length is 6 characters']
    }
});

const User2 = mongoose.model('user2', Schema);

module.exports = User2;