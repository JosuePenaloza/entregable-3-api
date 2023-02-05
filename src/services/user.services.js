const Users = require("../models/users.models");

class UserServices {
    static async getAll() {
        try {
            const result = await Users.findAll();
            return result
        } catch (error) {
            throw error
        }
    }

    static async getById(id) {
        try {
            const result = await Users.findByPk(id, {
                attributes: {
                    exclude: ['created_at', 'updated_at', 'password']
                }
            });
            return result;
        } catch (error) {
            throw error
        }
    }

    static async create(user) {
        try {
            const result = Users.create(user);
            return result;
        } catch (error) {
            throw error
        }
    }

    static async update(id, data) {
        try {
            const result = await Users.update(data,{
                where: {id}
          })
          return result;
        } catch (error) {
            throw error
        }
    }

    static async delete(id) {
        try {
            const result = await Users.destroy({where: {id}});
            return result;
        } catch (error) {
            throw error;
        }
    }


}

module.exports = UserServices;