const mongoose = require('mongoose')

//to have a set structure
const TaskSchema = new mongoose.Schema({
    name:{//validators for name
        type:String,
        required:[true,'must provide name'],
        trim:true, //to remove spaces
        maxlength:[20, 'name cannot exceed 20 characters']
    },
    completed:{
        type:Boolean,
        default:false
    },
})

module.exports = mongoose.model('Task', TaskSchema)