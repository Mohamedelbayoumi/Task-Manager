const {Sequelize} = require('sequelize')
const sequelize = new Sequelize('task-manager','root','mentafi',
{
    dialect:'mysql',
    host : 'localhost',
    port : 3000,
})
module.exports = sequelize