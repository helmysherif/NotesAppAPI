const app = require('express').Router();
const validation = require("../validator/register.validation");
const registerController = require("../controllers/register.controller")
app.post('/SignUp', validation , registerController.handleRegister);
module.exports = app;