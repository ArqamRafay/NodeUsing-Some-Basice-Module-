const path = require('path');
const os = require('os');
const FileSystem = require('fs');
const EventEmitter = require('events');  //this is the class so we need to make object of this class 
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello world');
        res.end();
    }
    if (req.url === '/Api/getUser') {
        res.write(JSON.stringify(['Ali', 'Arqam']));
        res.end();
    }
});



server.listen(3000);

console.log('Server is listning to port number 3000...')


var pathObj = path.parse(__filename);
var totalMemory = os.totalmem();
var freeMemory = os.freemem();
var cupBasicInfo = os.cpus();
var hostName = os.hostname();
var getIp = os.networkInterfaces();
var userInfo = os.userInfo();
var file = FileSystem.readdirSync('./');

FileSystem.readdir('./', function (err, files) {
    // if (err) console.log('Error: ', err);
    // else console.log('Result ', files);
});



// console.log(file);
// console.log(cupBasicInfo);
// console.log(`Total memory: ${totalMemory}`);
// console.log(`Free memory: ${freeMemory}`);
// console.log(`Host Name: ${hostName}`);
// console.log(getIp);
// console.log(userInfo);
// console.log(pathObj);  