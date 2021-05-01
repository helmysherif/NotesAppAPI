const express = require('express');
const path = require("path");
const cors = require("cors");
const port = 3000;
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
app.use(cors());
app.use(require("./routes/register.routes"));
app.use(require("./routes/login.routes"));
app.use(require("./routes/home.routes"));
mongoose.connect('mongodb+srv://sherif:admin@cluster0.p5ug5.mongodb.net/notesApp' , {useNewUrlParser : true , useUnifiedTopology : true}).then(() => {
    console.log("Connected!");
}).catch(() => {
    console.log("failed to connect to mongo database");
});
app.listen(process.env.PORT || port, () => {
    console.log('App listening on port 3000!');
});