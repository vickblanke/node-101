var fs = require('fs');

fs.readFile("data.txt", "utf8", checkEmails);

var emails = [];

function checkEmails(err, data) {
	if (err) {throw err;}
	emails = data.split("\n");
	var count = 0;

	for(var i = 0; i < emails.length; i++) {
		var atSign = emails[i].indexOf("@");
		var emailType = emails[i].substr(atSign + 1);
		if(emailType == "wisc.edu" || emailType == "wisc.edu\r") {
			count++;
			console.log(emails[i]);
		}
	}

	console.log("number of emails: " + count);

}