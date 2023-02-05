const Categories = require("../models/categories.models");

class CategoriesService {
    static async create(video) {
        try {
            const result = await Categories.create(video);
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async delete(id) {
        try {
            const result = await Categories.destroy({where: {id}});
            return result;
        } catch (error) {
            throw error;
        }
    }
};

module.exports = CategoriesService;