import UserModel from "../models/user";

class UserController {
    static async getUsers(req, res) {
        try {
            const users = await UserModel.find();
        return res.status(200).json({
            message: 'Users retrieved successfully.',
            users
        });
        } catch (error) {
            console.log('An error occured while geting users', error);
            return res.status(500).json({
                message: 'An error occured while geting users'
            });
        }
    }

    static async getUser(req, res) {
        try {
            const { userId } = req.params;
        if (!userId) {
            return res.status(417).json({
                message: 'User id is required.'
            });
        }
        const user = await UserModel.findOne({ id: userId }); // 
        if (!user) {
            return res.status(404).json({
                message: 'That user does not exist.'
            });
        }
        return res.status(200).json({
            message: 'User retrieved successfully',
            user
        });
        } catch (error) {
            console.log("Error occured while fetching user", error);
            return res.status(500).json({
                message: 'Error occured while fetching user'
            });
        }
    }

    static async createUser(req, res) {
        try {
            const { user } = req.body;
        if (!user) {
            return res.status(422).json({
                message: 'Pass a valid user object'
            });
        }
        const { name } = user;

        if (!name) {
            res.status(422).json({
                message: 'Pass a valid user name.'
            });
        } 
        await UserModel.create(user);
        return res.status(200).json({
            message: 'User created successfully.'
        });
        } catch (error) {
            console.log("An error occured while creating user", error);
            return res.status(500).json({
                message: 'An error occured while creating user.'
            });
        }
    }
}

export default UserController;