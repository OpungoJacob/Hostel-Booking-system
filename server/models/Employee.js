const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    surname: String,
    othernames: String,
    email: String,
    password: String

})
const EmployeeModel = mongoose.model('employees',EmployeeSchema)
module.exports =  EmployeeModel