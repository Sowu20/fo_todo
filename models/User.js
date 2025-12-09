const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        unique: true,
        minlength: [2, "Le nom doit contenir au moins 2 caractères"]
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: [10, "Le mot de passe doit contenir au moins 10 caractères"]
    }
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);

module.exports = User;