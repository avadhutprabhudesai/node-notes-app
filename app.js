const chalk = require('chalk');
const { addNote, removeNote, listNotes, readNote } = require('./notes');
const yargs = require('yargs');
const argv = yargs(process.argv.slice(2));

yargs.version('1.1.0');

yargs
  .command(
    'add',
    'Add a new note',
    function (yargs, helpOrVersionSet) {
      return yargs
        .option('title', {
          alias: 't',
          description: 'Title of the note',
          demandOption: true,
          type: 'string',
        })
        .option('body', {
          alias: 'b',
          description: 'Body of the note',
          demandOption: true,
          type: 'string',
        });
    },
    function ({ title, body }) {
      addNote(title, body);
    }
  )
  .command(
    'remove',
    'Remove an existing note',
    function (yargs, helpOrVersionSet) {
      return yargs.option('title', {
        alias: 't',
        description: 'Title of the note',
        demandOption: true,
        type: 'string',
      });
    },
    function ({ title }) {
      removeNote(title);
    }
  )
  .command(
    'read',
    'Read an existing note',
    function (yargs, helpOrVersionSet) {
      return yargs.option('title', {
        alias: 't',
        description: 'Title of the note',
        demandOption: true,
        type: 'string',
      });
    },
    function ({ title }) {
      readNote(title);
    }
  )
  .command('list', 'List all existing notes', function (args) {
    listNotes();
  })
  .help().argv;

/**
 * Operations
 *  add, remove, read, list
 */
