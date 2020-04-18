const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

mongoose.connect(process.env.DB_LINK, { useUnifiedTopology: true, useNewUrlParser: true }, error => {
    if(error) console.log(error);
    else console.log(`mongodb connected`);
});

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/public')));
app.use(morgan('dev'))
app.use('', require('./controllers/router'));

app.set('view engine', 'ejs');

const { PORT } = process.env;
app.listen(PORT, () => console.log(`Server runs on localhost:${PORT}`));