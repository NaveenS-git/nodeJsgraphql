const Sequelize = require('sequelize');

const sequelize = require('../config/database');

const User = sequelize.define('restuser', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name:{
        type: Sequelize.STRING,
    },
    technology:{
        type: Sequelize.STRING,
    }    
});

module.exports = User;
