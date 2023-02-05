const Users = require('./users.models');
const Categories = require('./categories.models');
const Courses = require('./courses.models');
const Videos = require('./videos.models');
const UsersCourses = require('./userCourses.model');
const CoursesCategories = require("./coursesCategories.model");


const initModels = () => {
    
    UsersCourses.belongsTo(Users, {as: 'user'});
    Users.hasMany(UsersCourses, {as: 'courses'});

    UsersCourses.belongsTo(Courses, {as: 'course'});
    Courses.hasMany(UsersCourses, {as: 'user'});


    CoursesCategories.belongsTo(Courses,{as: 'course', foreignKey: 'courses_id'});
    Courses.hasMany(CoursesCategories, {as: 'categories', foreignKey: 'courses_id'});

    CoursesCategories.belongsTo(Categories, {as: 'category', foreignKey: 'categories_id'});
    Categories.hasMany(CoursesCategories, {as: 'courses', foreignKey: 'categories_id'});

    Courses.hasMany(Videos)
    Videos.belongsTo(Courses)

};

module.exports = initModels;