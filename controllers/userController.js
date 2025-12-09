const User = require('../models/User');

exports.createUser = async(req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json({
            message: 'Utilisateur créer avec succès'
        });
        res.json(user);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

exports.listUser = async(req, res) => {
    const users = await User.find().select('-password');
    res.json(users);
};

exports.detailUser = async(req, res) => {
    try {
        const user = await User.findById(req.params.id).select('-password');
        if (!user) {
            return res.status(404).json({
                message: 'Utilisateur non créé'
            });
        }
        res.json(user);
    } catch (error) {
        return res.status(400).json({
            message: 'ID invalide'
        });
    }
}

exports.updateUser = async(req, res) => {
    try {
        const user = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!user) {
            return res.status(404).json({
                message: 'Utilisateur non trouvé'
            });
        }
        return res.status(201).json({
            message: 'Utilisateur mis à jour avec succès',
            user
        });
    } catch (error) {
        return res.status(400).json({
            message: 'ID invalide'
        });
    }
};

exports.deleUser = async(req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json({
            message: 'Utilisateur supprimé avec succès'
        });
    } catch (error) {
        res.status(400).json({
            message: 'ID invalide'
        });
    }
}