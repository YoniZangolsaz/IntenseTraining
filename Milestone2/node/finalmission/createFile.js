const fs = require('fs-extra');
let prompt = require('prompt-sync')();

function createFile() {
    console.log("enter name for the file ");
    let name_to_file = prompt("")
    if (fs.existsSync(`folderForMissions/${name_to_file}`)) {
      console.log('The file already exist');
    }
    else if(name_to_file === '') {
      console.log('You must give a name to the file');
    } else {
        fs.writeFileSync(`folderForMissions/${name_to_file}`)
        console.log(`the file ${name_to_file} create successfully`);
    }
}
module.exports = createFile()
