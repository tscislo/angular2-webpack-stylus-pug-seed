var path = require('path');
var argv = require('yargs').argv;
if (argv.config && !!argv.config.match('dev')) {
    module.exports.mode = "dev";
} else {
    module.exports.mode = "build";
}
console.log('---------------------')
console.log('MODE: ' + module.exports.mode);
console.log('---------------------')
module.exports.absPath = (x) => path.join(__dirname, x);