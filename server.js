const path = require('path');
const express = require('express');
const server = express();

const mainRouter = require('./routes/main.js');
const recipeRouter = require('./routes/recipe.js');

server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');

server.use(express.static(path.join(__dirname, 'public')));


server.use('/', mainRouter);
server.use('/recipe', recipeRouter);

server.listen(8000);