const crypto = require('crypto').randomBytes(256). toString('hex');

module.exports = {
	// uri: 'mongodb://localhost:27017/mean-angular-2',
	uri: 'mongodb://quanweilena:19911221@ds129003.mlab.com:29003/myblog-danzhou',
	secret: crypto,
	db: 'myblog-danzhou'
}