const {Router} = require('express');
const {
    getAllVideos,
    getByIdVideo,
    createVideo,
    updateVideo,
    deleteVideo
} = require("../controllers/vidoes.controller");

const router = Router();

router.post('/user/:id/videos', createVideo);
router.delete('/user/:id/videos', deleteVideo);

module.exports = router;