const express = require("express");
const routes = express.Router();

//Seguranças nas Rotas
const { celebrate, Joi, Segments,  } = require("celebrate");

//Importação de Controllers
const UserController = require('./controllers/UserController');
const TranslationController = require('./controllers/TranslationController');
const SessionController = require('./controllers/Session');
const SearchController = require('./controllers/SeachController');

routes.get('/Translation', TranslationController.index);
routes.post('/Translation', TranslationController.create);


routes.patch('/user/',UserController.index);

routes.post('/user',celebrate({
  [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().required(),
      phone_number: Joi.string().required(),
      cpf: Joi.number().integer()
  })
}),UserController.create);

routes.delete('/user', UserController.delete);

routes.get('/session', SessionController.create);


// Procurar Usuario

routes.get('/search', SearchController.index);

module.exports = routes; 