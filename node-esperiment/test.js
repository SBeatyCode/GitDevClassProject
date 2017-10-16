var filesYo = require('fs');
var https = require('https');

filesYo.writeFile(__dirname + "/index.html", "<h1>This is an HTML file!</h1>");

var squidURL = "https://www.destructoid.com//ul/447595-ER2.jpg%27);";
var squidFile = filesYo.createWriteStream(__dirname + "/squid.jpg");
var request = https.get(squidURL, function(response) {
    response.pipe(squidFile);
});