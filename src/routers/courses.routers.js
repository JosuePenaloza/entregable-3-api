const {Router} = require('express');
const {getCourseAll, getCourseByid, create, updateCourse, deleteCourse, getCoursesWithCategories} = require("../controllers/courses.controller");


const router = Router();

router.get('/courses', getCourseAll);
router.get('/courses/:id', getCourseByid);
router.post('/courses', create);
router.put('/courses/:id',updateCourse);
router.delete('/courses/:id', deleteCourse);

router.get('/courses/:id/categories', getCoursesWithCategories);

module.exports = router;