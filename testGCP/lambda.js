let AWS = require('aws-sdk');
let _auth = require('./Authorizer');
let google = require('googleapis').google;
const storage = google.storage('v1');
exports.handler = function (event, context, callback) {

	let encodedImage = event.image;
	let content = Buffer.from(encodedImage, 'base64');

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
	// storage.objects.insert({
	// 	"bucket": "staging.testgcpsigma.appspot.com",
	// 	"name": "image",
	// 	"media": {
	// 		"body": content
	// 	}
	// })
	// 	.then(response => {
	// 		console.log(response.data);           // successful response

	// 	})
	// 	.catch(err => {
	// 		console.log(err, err.stack); // an error occurred
	// 	});


	// storage.objects.copy({
	// 	sourceBucket: "staging.testgcpsigma.appspot.com",
	// 	sourceObject: "image",
	// 	destinationBucket: "testgcpsigma.appspot.com",
	// 	destinationObject: "copy"
	// })
	// 	.then(response => {
	// 		console.log(response.data);           // successful response

	// 	})
	// 	.catch(err => {
	// 		console.log(err, err.stack); // an error occurred
	// 	});

	// storage.objects.delete({
	// 	bucket: "testgcpsigma.appspot.com",
	// 	object: "copy"
	// })
	// 	.then(response => {
	// 		console.log(response.data);   
	// 		console.log("Object deleted");        // successful response
	// 		/*
	// 			response.data = {}
	// 		*/
	// 	})
	// 	.catch(err => {
	// 		console.log(err, err.stack); // an error occurred
	// 	});

	storage.objects.get({
		bucket: "staging.testgcpsigma.appspot.com",
		object: "image"
	})
		.then(data => {
			console.log(response.data);           // successful response

		})
		.catch(err => {
			console.log(err, err.stack); // an error occurred
		});


	callback(null, 'Successfully executed');
}