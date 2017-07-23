const User = require('../models/user');

module.exports = (router) => {

	router.post('/register', (req, res) => {
		if (!req.body.email) {
			res.json({ success: false, message: 'You must provide an E-mail'});
		};
		res.send('Hello world');
	});

	return router;
}