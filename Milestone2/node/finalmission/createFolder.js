const fs = require('fs-extra');
let prompt = require('prompt-sync')();

function createFolder() {
    console.log("enter name for the folder ");
    let nameToFolder = prompt("")
    if (fs.existsSync(`folderForMissions/${nameToFolder}`)) {
      console.log('The folder already exist');
    }
    else if(nameToFolder === '') {
      console.log('You must give a name for the file');
    } else {
        fs.mkdir(`./${nameToFolder}`)
        console.log(`the file ${nameToFolder} create successfully`);
    }
}
module.exports = createFolder()