const db = require('../utils/database');
const {DataTypes} = require('sequelize');
const Users = require('./users.models');
const Courses = require("./courses.models");

const UsersCourses = db.define('users_courses', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: Users,
            key: "id"
        },
        field: "user_id",
        allowNull: false
    },
    courseId: {
        type: DataTypes.INTEGER,
        references: {
            model: Courses,
            key: "id"
        },
        field: "course_id",
        allowNull: false
    }
});

module.exports = UsersCourses;