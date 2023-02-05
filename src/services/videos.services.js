const Videos = require("../models/videos.models");

class VideoServices {
    static async getAll() {
        try {
            const result = await Videos.findAll();
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async getById(id) {
        try {
            const result = await Videos.findByPk(id);
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async create(data) {
        try {
            const result = await Videos.create(data);
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async update(id, data) {
        try {
            const result = await Videos.update(data, {
                where: {id}
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async delete(id) {
        try {
            const result = await Videos.destroy({where: {id}});
            return result;
        } catch (error) {
            throw error;
        }
    }
};

module.exports = VideoServices;
