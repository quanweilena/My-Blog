/*  ==================
	Import Node Modules
===================== */

const express = require('express');		// Fast, unopinionated, minimalist web framework for Node 
const app = express();		// Initiate Express application
const router = express.Router();
const mongoose = require('mongoose');    // Node tool for MongoDB
const config = require('./config/database');	// Mongoose config
const path = require('path');	// Node package for file path
const authentication = require('./routes/authentication')(router);
const bodyParser = require('body-parser');

// Database connection
mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
	if (err) {
		console.log('Could NOT connect to database: ', err);
	} else {
		console.log('Connected to database: ' + config.db);
	};
});

// Provide static directory for frontend
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client/dist/'));
app.use('/authentication', authentication);

// Connect server to Angular 2 index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});

// Start server: Listening on port 8080
app.listen(8080, () => {
	console.log('Listening on port 8080');
});
