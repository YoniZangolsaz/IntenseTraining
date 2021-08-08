const fs = require('fs-extra');
let prompt = require('prompt-sync')();

// console.log(`press the right number ${num}`);

let counter = 1;
while(counter === 1 ) {
    
    console.log("menu \n1: Delete file \n2: Create file \n3: Write text to a file " +
    "\n4: Create folder \n5: Delete folder \n6: Create file in folder" +
    "\n7: delete file from folder \n8: Union file \n9: Enter 9 to exit  ");
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
        case ("3"):
            const appendFile = require('./appendFile')
            appendFile;
            break;
        case ("4"):
            const createFolder = require('./createFolder')
            createFolder;
            break;
        case ("5"):
            const deleteFolder = require('./deleteFolder')
            deleteFolder;
            break;
        case ("6"):
            const createFileInFolder = require('./createFileInFolder')
            createFileInFolder;
            break;  
        case ("7"):
            const deleteFileFromFolder = require('./deleteFileFromFolder')
            deleteFileFromFolder;
            break;
        case ("8"):
            const unionFile = require('./unionFile')
            unionFile;
            break;            
        case ('9'):
            console.log('Good bye');
            counter = 2;
            break;
        default:
            console.log(`Sorry, we are out of this number.`);
         
    }
}

