const fs = require('fs-extra');
let prompt = require('prompt-sync')();

// console.log(`press the right number ${num}`);

let counter = 1;
while(counter === 1 ) {
    
    console.log("menu \n1: Delete file \n2: Create file \n3: Write text to a file " +
    "\n4: Create folder \n9: Enter 9 to exit  ");
    let num = prompt("")
    switch(num) {
        case ("1"):
            const deleteFile = require('./deleteFile')
            deleteFile;
            break;
        case ("2"):
            const createFile = require('./createFile')
            createFile;
            break;
        case ("1"):
            console.log("append");
            break;
        case ('9'):
            console.log('Good bye');
            counter = 2;
            break;
        default:
            console.log(`Sorry, we are out of .`);
         
    }
}

