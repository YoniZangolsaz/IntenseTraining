const fs = require('fs-extra');
let prompt = require('prompt-sync')();

function createFileInFolder() {
    console.log("enter name for the file ");
    let nameOfFile = prompt("")
    console.log("enter name for the folder ");
    let nameOfFolder = prompt("")

    if(nameOfFile === '' || nameOfFolder === '') {
        console.log('You must give a name to the file or to the folder');
    } else if (nameOfFolder === '') {
      console.log('You must give a name to the folder');
    } else if (fs.existsSync(`folderForMissions/${nameOfFolder}`)) {
        if(fs.existsSync(`folderForMissions/${nameOfFolder}/${nameOfFile}`)) {
          console.log('The file already exist');
        } else {
          fs.writeFileSync(`folderForMissions/${nameOfFolder}/${nameOfFile}`)
          console.log(`the file ${nameOfFile} create successfully`);
      }
    } else {
      console.log('The folder not exist');
    }
}
module.exports = createFileInFolder()