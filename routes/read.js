const Router = require('express').Router();
const Models = require('../models');
const { User } = Models;

Router.get('/', async (req, res, next) => {
  try {
    const allUser = await User.findAll();
    res.status(200).json({ message: 'USERS FOUND', allUser });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

Router.get('/:id', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    await delete user["password"];
    console.log(user, "=========");
    res.status(200).json({ message: 'USER FOUND', user });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

module.exports = Router;
