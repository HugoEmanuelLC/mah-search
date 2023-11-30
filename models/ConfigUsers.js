const mongoose = require('mongoose');
const { isEmail } = require('validator');

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, 'Please enter your first name'],
        lowercase: true
    },
    lastname: {
        type: String,
        required: [true, 'Please enter your last name'],
        lowercase: true
    },
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email'],
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        minlength: [6, 'Minimum password length is 6 characters'],
    },
    url_linkedin: {
        type: String,
    },
    url_github: {
        type: String,
    },
    url_photoprofil: {
        type: String,
    },
    url_cv: {
        type: String,
    },
    companies: [{
        jobtitle: {
            type: String,
            required: [true, 'Please enter a job title'],
            lowercase: true
        },
        website: {
            type: String,
        },
        employercontact: {
            name: {
                type: String,
                lowercase: true
            },
            email: {
                type: String,
                unique: true,
                lowercase: true,
                validate: [isEmail, 'Please enter a valid email'],
            },
            phone: {
                type: String,
            },
            address: {
                type: String,
                lowercase: true
            },
        },
        origin: [
            {
            type: String,
            }
        ],
        status: [
            {
            type: String,
            }
        ],
        comments: [
            {
            title: String,
            content: String,
            }
        ],
    }],
});

module.exports = userSchema;