const express = require('express');

const ctrl = require('../../controllers/contacts')


const router = express.Router();

// ----------------------- ОПРАЦЮВАННЯ ЗАПИТІВ

// отримання всіх контактів

router.get('/', ctrl.getAll);

// отримання контакту по id

router.get('/:contactId', ctrl.getById);

// створення контакту

router.post('/', ctrl.add);

// видалення контакту по id

router.delete('/:contactId', ctrl.deleteById);

// Онослення контакту по id

router.put('/:contactId', ctrl.updateById);

// Оновлення улюбленого контакту

router.patch('/:contactId/favorite', ctrl.updateFavorite);

module.exports = router;
