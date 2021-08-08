const fs = require('fs-extra');
let prompt = require('prompt-sync')();


function deleteFile() {
    console.log("enter name of file to delete ");
    let file = prompt("")
    try {
        fs.unlinkSync(`./folderForMissions/${file}`)
        console.log('the file remove successfully');
        //file removed
      } catch(err) {
        console.error(err)
        console.log('your file is not exist!');
    }
}

module.exports = deleteFile()
