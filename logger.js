const EventEmitter = require('events');
const emitter = new EventEmitter();

// console.log(__filename);
// console.log(__dirname);

var url = 'http://mylogger.io/log';
function log(message) {
    console.log(message);
}


module.exports = log;
