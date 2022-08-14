const createError = require('../helpers/createError');
const jwt = require("jsonwebtoken");
const { User } = require('../models/user');

const { SECRET_KEY } = process.env;

const login = async (req, res, next) => {
  // Взяти з заголовків заголовок authorization
  const { authorization = ""} = req.headers;
  // Розділити його на 2 слова
  const [bearer, token] = authorization.split(" ");
  // Перевірити чи першим словом є Bearer
  if (bearer !== "Bearer") {
    next(createError(401));
  }

  try {
  // Перевірити чи другим словом є токен який ми шофрували
    const { id } = jwt.verify(token, SECRET_KEY);
  // Знайти користувача по токену
    const user = await User.findById(id);
    if (!user || !user.token) {
      next(createError(401, "Not authorized"));
    }
    req.user = user;
    next();
  } catch (error) {
    next(createError(401, "Not authorized"));
  }
};

module.exports = login;