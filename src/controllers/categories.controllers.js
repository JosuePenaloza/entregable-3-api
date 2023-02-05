const CategoriesService = require("../services/categories.services");

const createCategory = async (req, res) => {
    try {
        const newCategory = req.body;
        const result = await CategoriesService.create(newCategory);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
};

const deleteCategory = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await CategoriesService.delete(id);
        res.json(result);
    } catch (error) {
        res.status(400).json({message: error.message });
    }
}

module.exports = {
    createCategory,
    deleteCategory
}