var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);
console.log('The bot is starting!');

var tweet = {
    status: 'Oh hi'
}

T.post('statuses/update', tweet);

function tweet(err, data, response) {
    if (err) {
        console.log("Something went wrong!");
    } else {
            console.log("It worked!");
        }
    }