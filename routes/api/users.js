const express = require("express");

const ctrl = require('../../controllers/users');
const { login } = require('../../middlewares');

const router = express.Router();

// -----------------------ОПИС МАРШРУТІВ ТА ОПРАЦЮВАННЯ ЗАПИТІВ

// реєстрація
router.post("/signup", ctrl.signup);

// вхід
router.post("/login", ctrl.login);

// Поточний користувач 
router.get("/current", login, ctrl.getCurrent);

// Вихід 
router.get("/logout", login, ctrl.logout);

module.exports = router;