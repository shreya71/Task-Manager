const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./DB/CONNECT.JS')
require('dotenv').config()

//middleware
//setting up stataic files
app.use(express.static('./public'))
//if we don't use this we won't have the data in rec.body
app.use(express.json())


//middleware looking for task and passing to router
app.use('/api/v1/tasks',tasks)



// app.get('/api/v1/tasks')             - get all the tasks
//app.post('/api/v1/tasks')             - create a new task
//app.get('/api/v1/tasks/:id')         - get single task 
//app.patch('/api/v1/tasks/:id')        - update task  
//app.delete('/api/v1/tasks/:id')             - delete task  

const port = 3000

//invoke connectDB
const start = async () =>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening on port ${port}...`))
    }catch(error){
        console.log(error)
    }
}

start()