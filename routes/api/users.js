const express = require("express");

const ctrl = require('../../controllers/users');
const { login, upload } = require('../../middlewares');

const router = express.Router();

// -----------------------ОПИС МАРШРУТІВ ТА ОПРАЦЮВАННЯ ЗАПИТІВ

// реєстрація
router.post("/signup", ctrl.signup);

// верифікація
router.get("/verify/:verificationToken", ctrl.verifyEmail);

// повторне надсилання листа для верифікації
router.post("/verify", ctrl.resendVerifyEmail);

// вхід
router.post("/login", ctrl.login);

// Поточний користувач 
router.get("/current", login, ctrl.getCurrent);

// Вихід 
router.get("/logout", login, ctrl.logout);

// зміна аватару 
router.patch("/avatars", login, upload.single('avatar'), ctrl.setAvatar);

module.exports = router;