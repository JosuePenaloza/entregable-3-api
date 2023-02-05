const db = require("../utils/database");
const {DataTypes} = require('sequelize');
const Courses = require("./courses.models");
const Categories = require("./categories.models");

const CoursesCategories = db.define('courses_categories', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
    },
    coursesId: {
        type: DataTypes.INTEGER,
        references: {
            model: Courses,
            key: "id"
        },
        field: "courses_id",
        allowNull: false,
    },
    categoriesId: {
        type: DataTypes.INTEGER,
        references: {
            model: Categories,
            key: "id"
        },
        field: "categories_id",
        allowNull: false,
    }
});

module.exports = CoursesCategories;