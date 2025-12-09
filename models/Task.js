const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    priorite: {
        type: String,
        enum: ['basse', 'moyenne', 'haute'],
        default: 'basse'
    },
    statut: {
        type: String,
        enum: ['en_attente', 'en_cours', 'accepte'],
        default: "en_attente"
    },
    date_echeance: {
        type: Date,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true });

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;