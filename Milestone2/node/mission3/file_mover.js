const fs = require("fs");
// const mv = require('mv');


// (async () => {
// 	await moveFile('./files_to_move/b.txt', './moved_files/');
// 	console.log('The file has been moved');
// })();


const oldPath = 'files_to_move/.txt';
let newPath = 'moved_files';

// const filesName = fs.readdirSync(oldPath);
// console.log(filesName);

fs.rename(oldPath, newPath, function(err) {
    if (err) {
       throw err
   } else {
       console.log("Successfully moved the file!");
   }
});

