var screenshot = require('url-to-image');
screenshot('localhost:8000', 'screenshot.png').done(function() {
	console.log('screenshot saved');
});
