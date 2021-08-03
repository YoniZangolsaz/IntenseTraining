const prompt = require('prompt-sync')();
const randomWords = require('random-words');
const fs = require('fs');
// let numFile = prompt('enter number of files: ');
// let numWords = prompt('enter number of words: ');

 
function file_generator(numOfFile, numOfWords) {
    for (let i = 0; i < numOfFile; i++) {
        fs.writeFile(`./created_files/file ${i + 1}` , randomWords(numOfWords), function (err) {
            if (err) throw err;
        });
        console.log(`file ${i + 1} has a ${numOfWords} words`);
        numOfWords = numOfWords * 2;
    }
}

file_generator(2,5);

