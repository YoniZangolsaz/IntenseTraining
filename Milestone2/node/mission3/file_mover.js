const fs = require("fs-extra");

const oldPath = 'files_to_move';
let newPath = 'moved_files';

moveFiles(function() {
    const filesName = fs.readdirSync(oldPath);

    filesName.forEach((fn) => {
    const from = `${oldPath}/${fn}`;
    const to = `${newPath}/${fn}`;

        fs.rename(from, to, (err) => {
            if (err) console.log(err);

            console.log(`${fn} Successfully moved`);
            fs.appendFileSync(`./moved_files.txt`, `${fn} moved\n`, (e) => {
            });
        });
    });
}, 3000);