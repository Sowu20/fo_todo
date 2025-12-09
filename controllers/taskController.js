const Task = require('../models/Task');

exports.createTasks = async(req, res) => {
    try {
        const task = Task.create({
            ...req.body,
            user: req.userId
        });
        res.status(201).json({
            message: 'Tâche créer avec succès',
            task
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message
        });
    }
};

exports.listTask = async(req, res) => {
    const tasks = await Task.find().populate('user');
    res.json(tasks);
};

exports.detailTask = async(req, res) => {
    try {
        const task = await Task.findById(req.params.id).populate('user');
        if (!task) {
            res.status(404).json({
                message: 'Tâche non trouvée'
            });
        };
        res.json(task);
    } catch (error) {
        res.status(400).json({
            message: 'ID invalide'
        });
    }
};

exports.updateTask = async(req, res) => {
    try {
        const updateTask = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )
        if (!updateTask) {
            return res.status(404).json({
                message: 'Utilisateur non trouvé'
            });
        };
        res.json(updateTask)
    } catch (error) {
        res.status(400).json({
            message: 'ID invalide'
        });
    }
};

exports.deleteTask = async(req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.json({
            message: 'Tâche supprimée avec succès'
        });
    } catch (error) {
        res.status(400).json({
            message: 'ID invalide'
        });
    }
}