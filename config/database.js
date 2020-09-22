const crypto = require('crypto').randomBytes(256). toString('hex');

module.exports = {
	// uri: 'mongodb://localhost:27017/mean-angular-2',
	uri: 'mongodb+srv://quanweilena:19911221@myblog-danzhou.8zlqb.mongodb.net/myblog-danzhou?retryWrites=true&w=majority',
	secret: crypto,
	db: 'myblog-danzhou'
}