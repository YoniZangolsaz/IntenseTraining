const randomWords = require('random-words');
const fs = require('fs');


const args = process.argv.slice(2);
file_generator(args[0], args[1]);
 
function file_generator(numOfFile, numOfWords) {

    for (let i = 0; i < numOfFile; i++) {
        numOfWords = numOfWords * 1;
        fs.writeFile(`./created_files/file ${i + 1}` , randomWords(numOfWords), function (err) {
            if (err) throw err;
        });
        console.log(`file ${i + 1} has a ${numOfWords} words`);
        numOfWords = numOfWords * 2;
    }
};


