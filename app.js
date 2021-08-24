let fs = require('fs'); // Imported the fs module in Node.js
let file = './tweetFile.txt'; // tweetFile contains the tweets

// List of profane words
let profaneWords = ['bad', 'worst', 'insulted', 'dirty', 'rotten', 'cursed', 'terrible', 'sweared']; 

let tweets = []; // Empty array to store the tweets
tweets = fs.readFileSync(file).toString().split("\n"); // Read the file into the array


// Create a 2D array to store the tweet number and degree of profanity in the tweet
let profanityCount = new Array(tweets.length);  
for(var k = 0; k < profanityCount.length; k++ ) {
    profanityCount[k] = new Array(2);
}


// Initialize the profanity count of all tweets to 0
for(var i = 0; i < profanityCount.length; i++) {
    for(var j = 0; j < 1; j++) {
        profanityCount[i][j] = `Profanity Count of Tweet: ${i+1}`;
        profanityCount[i][j+1] = 0;
    }
}

// Check every tweet and keep count of the profane words in it
for(var i = 0; i < tweets.length; i++) {
    let pat = /(\r\n|\n|\r|[.,])/gm;
    let temp = tweets[i];
    temp = temp.replace(pat, ' ');
    temp = temp.split(' ')
    temp.forEach((word) => {
        if(profaneWords.includes((word))) {
            profanityCount[i][1] = profanityCount[i][1] + 1;
        }

    })
};

// Display the profanity count of each tweet
console.log(profanityCount);