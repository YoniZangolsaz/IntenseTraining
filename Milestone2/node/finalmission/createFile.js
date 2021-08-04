const fs = require('fs-extra');
let prompt = require('prompt-sync')();

function createFile() {
    console.log("enter name for the file ");
    let name_to_file = prompt("")
    try {
        fs.mkdir(`./${name_to_file}.txt`)
        console.log(`the file ${name_to_file} create successfully`);
      } catch(err) {
        console.error(err)
        console.log('your must to gine a name');
    }
}
module.exports = createFile()
