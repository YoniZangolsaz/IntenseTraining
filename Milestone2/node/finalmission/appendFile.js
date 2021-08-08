const fs = require('fs');
let prompt = require('prompt-sync')();

function appendFile() {
    console.log("enter the name of file");
    let file = prompt("");
    console.log("enter the data to write to the file");
    let data = prompt("");
    
    if (fs.existsSync(`./folderForMissions/${file}`)) {
        fs.appendFileSync(`./folderForMissions/${file}`, data);
        console.log('Saved!');
    } else {
        console.log("The file not exist");
    }
}

module.exports = appendFile()
