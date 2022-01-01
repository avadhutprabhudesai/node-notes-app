const getNotes = require('./notes');
const chalk = require('chalk');
console.log(getNotes());

console.log(chalk.green.inverse('Success'));
console.log(chalk.blue('This is a new message'));
console.log(chalk.bgRed.yellow.bold('Avadhut'));
