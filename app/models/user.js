const mongoose = require('mongoose');

const { Schema, connection } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    }
});

const UserModel = connection.model('user', userSchema);

export default UserModel;