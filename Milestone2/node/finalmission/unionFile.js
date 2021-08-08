const fs = require('fs-extra');
let prompt = require('prompt-sync')();

function unionFile() {
    console.log("enter the name for the first file ");
    let firstFileName = prompt("")
    console.log("enter the name for the second file ");
    let secondFileName = prompt("")


    if (firstFileName === '' || secondFileName === '') {
        console.log('You must give a names for the files');
    }
    else if (!fs.existsSync(`folderForMissions/${firstFileName}`)) {
        console.log('The first file not exist');
    }
    else if (!fs.existsSync(`folderForMissions/${secondFileName}`)) {
        console.log('The second file not exist');
    }
    else {
        fs.readFile(`folderForMissions/${secondFileName}`,'utf8', function read(err, data) {
            if (err)  throw err;
            fs.appendFile(`folderForMissions/${firstFileName}`, `\n ${data}` )
            fs.unlink(`folderForMissions/${secondFileName}`);
        });
    }
}
module.exports = unionFile()