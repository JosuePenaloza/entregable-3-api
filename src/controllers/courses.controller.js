const CourseServices = require("../services/course.services");

const getCourseAll = async (req, res) => {
    try {
        const result = await CourseServices.getAll();
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

const getCourseByid = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await CourseServices.getById(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

const getCoursesWithCategories = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await CourseServices.getWithCategories(id);
        res.json({
            message: " Sen Categories",
            data: result
        })
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

const create = async (req, res) => {
    try {
        const newCourse = req.body;
        const result = await CourseServices.create(newCourse);
        res.status(201).json(result);
    }catch (error) {
        res.status(400).json({message: error.message});
    }
}

const updateCourse = async (req, res) => {
    try {
        const{id} = req.params;
        const field = req.body;
        const result = await CourseServices.update(id, field);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

const deleteCourse = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await CourseServices.delete(id);
        res.json(result);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

module.exports = {
    getCourseAll,
    getCourseByid,
    create,
    updateCourse,
    deleteCourse,
    getCoursesWithCategories
}