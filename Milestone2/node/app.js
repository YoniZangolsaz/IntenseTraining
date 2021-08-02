   
//    const os = require('os');

//    var totalMemory = os.totalmem();
//    var freeMemory = os.freemem();

//    console.log(`Total memory: ${totalMemory}`);
//    console.log(`free memory: ${freeMemory}`);


// const fs = require('fs');

// const files = fs.readdirSync('./');
// console.log(files);


//  const EventEmitter = require('events');
//  const emitter = new EventEmitter();

//  emitter.on('messageLogged', function(arg) {
//      console.log('Listener called', arg);
//  });
//  emitter.emit('messageLogged', {id: 1, url: 'http://'});


// const http = require('http');

// const server = http.createServer((req, res) => {
//     if(req.url === '/') {
//         res.write('Hello World');
//         res.end;
//     }
//     if(req.url === '/api') {
//         res.write(JSON.stringify([1, 2, 3]));
//         res.end;
//     }
// });

// server.on('connection', (socket) => {
//     console.log('New connection');
// })

// server.listen(3000);

// console.log('Listening on port 3000');





// var http = require("http");


// http.createServer(function (request, response) {
//     // Send the HTTP header 
//     // HTTP Status: 200 : OK
//     // Content Type: text/plain
//     response.writeHead(200, {'Content-Type': 'text/plain'});
    
//     // Send the response body as "Hello World"
//     response.end('Hello World\n');
//  }).listen(8081);
 
//  // Console will print the message
//  console.log('Server running at http://127.0.0.1:8081/');




// // Import events module
// var events = require('events');

// // Create an eventEmitter object
// var eventEmitter = new events.EventEmitter();

// // Create an event handler as follows
// var connectHandler = function connected() {
//    console.log('connection succesful.');
  
//    // Fire the data_received event 
//    eventEmitter.emit('data_received');
// }

// // Bind the connection event with the handler
// eventEmitter.on('connection', connectHandler);
 
// // Bind the data_received event with the anonymous function
// eventEmitter.on('data_received', function() {
//    console.log('data received succesfully.');
// });

// // Fire the connection event 
// eventEmitter.emit('connection');

// console.log("Program Ended.");


var fs = require('fs');
 
// // writeFile function with filename, content and callback function
// fs.writeFile('newfile.txt', 'Learn Node FS module', function (err) {
//   if (err) throw err;
//   console.log('File is created successfully.');
// });

function createFile(numOfFile, numOfWords) {
    for (let index = 0; index < numOfFile; numOfFile--) {
        fs.writeFile(`file: ${numOfFile}`, 'Learn Node FS module', function (err) {
            if (err) throw err;
            console.log('File is created successfully.');
          });
    }
}
createFile(2,3);