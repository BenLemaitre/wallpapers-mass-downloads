const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT;

// middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(PORT, err => {
	if (err) {
		console.log(err);
	}
});

const main = require('./utils');
main();