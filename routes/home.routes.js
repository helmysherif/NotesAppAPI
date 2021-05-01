const app = require('express').Router();
const auth = require("../middleware/auth");
const homeController = require("../controllers/home.controller");
app.get('/home'       ,homeController.getAllNotes);
app.post('/addNote'   , auth , homeController.addNote);
app.delete('/delete'    , auth , homeController.deleteNote);
app.put('/updateNote', auth , homeController.updateNote);
module.exports = app;