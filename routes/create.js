const Router = require('express').Router();
const Models = require('../models');
const { User } = Models;

async function handleRequest(request, response, next) {
  const { body } = request;
  console.log(body);
  try {
    const createdUser = await User.create(body);
    response.status(200).json({ message: 'USER CREATED', createdUser });
  } catch (e) {
    response.status(400).json({ message: e.message });
  }
}

Router.post('/', handleRequest);

module.exports = Router;
