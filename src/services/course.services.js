const Categories = require("../models/categories.models");
const Courses = require("../models/courses.models");
const CoursesCategories = require("../models/coursesCategories.model");
const Videos = require("../models/videos.models");

class CourseServices {
    static async getAll() {
        try {
            const result = await Courses.findAll();
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async getById(id) {
        try {
            const result = await Courses.findByPk(id);
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async create(data) {
        try {
            const result = Courses.create(data);
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async update(id, data) {
       try {
            const result = await Courses.update(data, {
                where: {id}
            });
            return result;
       } catch (error) {
            throw error;
       }
    }

    static async delete(id) {
        try {
            const result = await Courses.destroy({where: {id}});
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async getWithCategories(id) {
        try {
            const result = await Courses.findOne({
                where: {id},
                include: [
                    {
                        model: CoursesCategories,
                        as: 'categories',
                        attributes: ["id"],
                        include: {
                            model: Categories,
                            as: 'category'
                        },
                    },
                    {
                        model: Videos,
                        attributes: ["title"]
                    }
                ]
                
            });
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = CourseServices;