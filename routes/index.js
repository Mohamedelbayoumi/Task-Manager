const express = require('express')
const router  = express.Router()

const indexControllers = require('../controllers/index')

router.get('/',indexControllers.getTasks)

router.post('/',indexControllers.createTask)

router.get('/:id',indexControllers.getOneTask)

router.patch('/:id',indexControllers.editTask)

router.delete('/:id',indexControllers.deleteTask)


module.exports = router