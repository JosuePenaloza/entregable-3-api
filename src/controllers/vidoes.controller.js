const VideoServices = require("../services/videos.services");

const getAllVideos = async (req, res) => {
    try {
        const result = await VideoServices.getAll();
        res.json(result);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

const getByIdVideo = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await VideoServices.getById(id);
        res.json(result);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

const createVideo = async (req, res) => {
    try {
        const newVideo = req.body;
        const result = await VideoServices.create(newVideo);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

const updateVideo = async (req, res) => {
    try {
        const {id} = req.params;
        const data = req.body;
        const result = await VideoServices.update(id, data);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

const deleteVideo = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await VideoServices.delete(id);
        res.json(result);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

module.exports = {
    getAllVideos,
    getByIdVideo,
    createVideo,
    updateVideo,
    deleteVideo
}




