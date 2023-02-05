const db = require('../utils/database');
const {DataTypes} = require('sequelize');

const Users = db.define("users", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'frist_name'
    },
    lastName: {
        type: DataTypes.STRING,
        field: 'last_name'
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING, 
        unique: true,
        validate: {
            isEmail: true
        },
        allowNull: false
    }
});

module.exports = Users;