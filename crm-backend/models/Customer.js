const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true,"Please enter your name"]
    },
    email:{
        type:String,
        required: [true,"Please enter your email"]
    },
    password: {
        type:String,
        required : [true,"Please enter your password"]
    },
    totalSpends: Number,
    maxVisits: Number,
    lastVisit: Date
})

module.exports = mongoose.model('Customer', customerSchema)