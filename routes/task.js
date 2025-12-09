const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const auth = require('../middleware/auth');

// Créer une tâche
router.post('/add_task', auth, taskController.createTasks);

// Liste des tâches
router.get('/list_task', auth, taskController.listTask);

// Avoir les détails d'une tâche 
router.get('/detail_task/:id', auth, taskController.detailTask);

// Mettre à jour une tâche
router.put('/update_task/:id', auth, taskController.updateTask);

// Supprimer une tâche
router.delete('/delete_task/:id', auth, taskController.deleteTask);

module.exports = router;