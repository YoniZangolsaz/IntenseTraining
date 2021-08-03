require("dotenv").config();
var oneLinerJoke = require('one-liner-joke');
var fs = require("fs");

let numOfJokes = process.env.JOKE_AMOUNT || 50;
let jokeSubject = process.env.JOKE_SUBJECT;

if (numOfJokes < 50) {
    console.log('The amount of jokes is under 50');
}else {
    if(!jokeSubject) {
        console.log('The subject of jokes is not chosen');
    }else{
    jokes();
}}
    
function jokes(){
    counter = 1;
    while (counter <= numOfJokes){
        let getRandomJoke = oneLinerJoke.getRandomJokeWithTag(process.env.JOKE_SUBJECT);
        let jokeConvert = JSON.stringify(getRandomJoke);
        fs.readFile('/joke.txt','utf8',(err, data) => {
            if (data === jokeConvert) {
                throw err;
            }
            fs.appendFile('joke.txt' , jokeConvert + "\n", function (err) {
                if (err) throw err;
            });
        })
        counter++;
    }
}
    