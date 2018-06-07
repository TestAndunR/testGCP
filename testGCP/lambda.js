let AWS = require('aws-sdk');
let _auth = require('./Authorizer');
let google = require('googleapis').google;
const storage = google.storage('v1');
exports.handler = function (event, context, callback) {
	storage.objects.list({
		bucket: 'staging.testgcpsigma.appspot.com',
		maxResults: 10,
		prefix: ''
	})
		.then(response => {
			console.log(response.data);           // successful response

		})
		.catch(err => {
			console.log(err, err.stack); // an error occurred
		});
	storage.objects.insert({
		"bucket": "staging.testgcpsigma.appspot.com",
		"name": "image",
		"media": {
			"body": content
		}
	})
		.then(response => {
			console.log(response.data);           // successful response
			
		})
		.catch(err => {
			console.log(err, err.stack); // an error occurred
		});


	callback(null, 'Successfully executed');
}