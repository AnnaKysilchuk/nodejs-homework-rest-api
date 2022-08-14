const express = require('express');

const { login } = require('../../middlewares');

const ctrl = require('../../controllers/contacts');

const router = express.Router();

// ----------------------- ОПРАЦЮВАННЯ ЗАПИТІВ

// отримання всіх контактів

router.get('/', login, ctrl.getAll);

// отримання контакту по id

router.get('/:contactId', login, ctrl.getById);

// створення контакту

router.post('/', login, ctrl.add);

// видалення контакту по id

router.delete('/:contactId', login, ctrl.deleteById);

// Онослення контакту по id

router.put('/:contactId', login, ctrl.updateById);

// Оновлення улюбленого контакту

router.patch('/:contactId/favorite', login, ctrl.updateFavorite);

module.exports = router;
