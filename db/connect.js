const mongoose =require('mongoose')

const connectionString = ""

const connect = async (url) => {
       await mongoose.connect(url)
        console.log('connected')
}

module.exports = connect