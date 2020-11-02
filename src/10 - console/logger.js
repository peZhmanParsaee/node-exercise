const fs = require('fs');
const { Console } = require('console');

const output = fs.createWriteStream(__dirname + '/stdout.log');
const errorOutput = fs.createWriteStream(__dirname + '/stderr.log');

const logger = new Console({ stdout: output, stderr: errorOutput });

const count = 5;
logger.log('count: %d', count);

logger.trace('Show it ');
