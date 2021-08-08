const fs = require('fs-extra');
let prompt = require('prompt-sync')();

function deleteFileFromFolder() {
    console.log("enter name for the file ");
    let nameOfFile = prompt("")
    console.log("enter name for the folder ");
    let nameOfFolder = prompt("")

    if(nameOfFile === '') {
        console.log('You must give a name to the file');
    } else if (nameOfFolder === '') {
      console.log('You must give a name to the folder');
    } else if (fs.existsSync(`folderForMissions/${nameOfFolder}`)) {
        if(!fs.existsSync(`folderForMissions/${nameOfFolder}/${nameOfFile}`)) {
          console.log('The file not exist');
        } else {
          fs.unlinkSync(`folderForMissions/${nameOfFolder}/${nameOfFile}`)
          console.log(`the file ${nameOfFile} delete successfully`);
      }
    } else {
      console.log('The folder not exist');
    }
}
module.exports = deleteFileFromFolder()