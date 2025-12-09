const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authUser = require('../controllers/auth');

// Créer un utilisateur
router.post('/add_user', userController.createUser);

// Liste des utilisateurs
router.get('/list_users', userController.listUser);

// Avoir les détails d'un utilisateur
router.get('/detail_user/:id', userController.detailUser);

// Mettre à jour un utilisateur
router.put('/update_user/:id', userController.updateUser);

// Supprimer un utilisateur
router.delete('/delete_user/:id', userController.deleUser);

router.post('/register', authUser.register);
router.post('/login', authUser.login);

module.exports = router;