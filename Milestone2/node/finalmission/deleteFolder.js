const fs = require('fs-extra');
let prompt = require('prompt-sync')();

function deleteFolder() {
    console.log("enter name for the folder to delete ");
    let nameOfFolder = prompt("")
    if(nameOfFolder === '') {
        console.log('You must give a name for the file');
    }
    else if (!fs.existsSync(`folderForMissions/${nameOfFolder}`)) {
      console.log('The folder not exist');
    } else {
        fs.rmdirSync(`folderForMissions/${nameOfFolder}`)
        console.log(`the folder ${nameOfFolder} delete successfully`);
    }
}
module.exports = deleteFolder()