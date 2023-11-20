const express = require('express')
const path = require('path')
const routes = require('./routes/index')
const connect = require('./db/connect')
require('dotenv').config()

const app = express()

app.use(express.static(path.join(__dirname , 'public')))
app.use(express.json())

app.use('/api/v1/tasks', routes);

app.use((err,req,res,next) => {
    res.status(500).json({msg : "something wrong happens try again later"})
})
const start = async ()=> {
    try {
        await connect(process.env.MONGO_URI)
        app.listen(5000)
    }
    catch (err) {
        console.log(err)
    }
}

start()