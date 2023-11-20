const Task = require('../models/task')

exports.getTasks = async(req,res,next) => {
    try {
        const tasks = await Task.find({})
        res.status(200).json({tasks})
    }
    catch (err) {
        next (err)
    }
}

exports.createTask = async(req,res,next) => {
    try {
        const task = await Task.create({
            name : req.body.name,
            completed : false
        })
        res.status(200).json({task})

    }
    catch (err) {
         next(err)
    }
}

exports.getOneTask = async(req,res,next) => {
    try {
    const id = req.params.id
    const task = await Task.findById(id)
    if (!task) {
        return res.status(404).json({msg : "page not found"})
    }
    res.status(200).json({task})
    }
    catch (err) {
        next(err)
    }
}

exports.editTask = async (req,res,next) => {
    try {
    const id = req.params.id
    const task = await Task.findByIdAndUpdate(id,req.body,{
        new :true,
        runValidators : true
    })
    if (!task) {
        return res.status(404).json({msg : "page not found"})
    }
    res.status(200).json({task})
}
catch (err) {
    next(err)
}
}

exports.deleteTask = async(req,res,next) => {
    try {
    const id = req.params.id
    const task = await Task.findByIdAndDelete(id)
    if (!task) {
        return res.status(404).json({msg : "page not found"})
    }
    res.status(200).json({task})
    }
    catch (err) {
        next (err)
    }
}