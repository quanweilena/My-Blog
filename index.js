/*  ========================
	Import Node Modules
============================ */

const express = require('express');		// Fast, unopinionated, minimalist web framework for Node 
const app = express();		// Initiate Express application
const router = express.Router();	// Create a new router object
const mongoose = require('mongoose');    // Node tool for MongoDB
const config = require('./config/database');	// Mongoose config
const path = require('path');	// NodeJS package for file path
const authentication = require('./routes/authentication')(router);	// Import authentication routes
const bodyParser = require('body-parser');	// Parse incoming request bodies in a middleware before your handlers, available under the req.body property
const cors = require('cors');

// Database connection
mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
	if (err) {
		console.log('Could NOT connect to database: ', err);
	} else {
		console.log('Connected to database: ' + config.db);
	};
});

// Middleware
app.use(cors({
	origin: 'http://localhost:4200'
}));
app.use(bodyParser.urlencoded({ extended: false }));  // parse application/x-www-form-urlencoded
app.use(bodyParser.json());  // parse application/json
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
