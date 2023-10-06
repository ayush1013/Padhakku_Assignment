const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true
    },
    name: {
        type: String,
    }
})

const UserModel = mongoose.model("Users", UserSchema);

module.exports = UserModel