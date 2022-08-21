const mongoose = require('mongoose');

const { Schema, connection } = mongoose;

const userSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    }
});

const UserModel = connection.model('user', userSchema);

export default UserModel;
