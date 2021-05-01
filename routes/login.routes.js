const app = require('express').Router();
const loginController = require("../controllers/login.controller");
app.post('/login', loginController.handleLogin);
module.exports = app;