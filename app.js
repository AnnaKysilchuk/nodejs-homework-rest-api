const express = require('express');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();

const usersRouter = require('./routes/api/users');
const contactsRouter = require('./routes/api/contacts');

// Створюємо сервер
const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

// Створюємо middleware (проміжні обробники) для всіх запитів
app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
// ---вказуємо що всі статичні факли потрібно шукати в папці public
app.use(express.static('public'));

// Створюємо middleware для конкретної групи запитів /api/contacts
app.use('/api/users', usersRouter);
app.use('/api/contacts', contactsRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
