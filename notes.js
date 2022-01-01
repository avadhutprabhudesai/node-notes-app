const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
  const notes = loadNotes();
  const isTitlePresent = notes.find(
    ({ title: noteTitle }) => noteTitle === title
  );
  if (isTitlePresent) {
    console.log(chalk.red.inverse('Note title taken'));
  } else {
    notes.push({
      title,
      body,
    });
    console.log(chalk.green.inverse('Note added'));
    saveNotes(notes);
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const filteredNotes = notes.filter((note) => note.title !== title);
  if (notes.length === filteredNotes.length) {
    console.log(chalk.red.inverse('No not found'));
  } else {
    console.log(chalk.green.inverse('Note removed'));
    saveNotes(filteredNotes);
  }
};

const listNotes = () => {
  const notes = loadNotes();
  if (notes.length) {
    notes.map((note) => console.log(chalk.green.inverse(note.title)));
  } else {
    console.log(chalk.red.inverse('Notes list empty'));
  }
};

const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);
  if (note) {
    console.log('Title', chalk.green.inverse(note.title));
    console.log('Body', chalk.green.inverse(note.body));
  } else {
    console.log(chalk.red.inverse('No such note found'));
  }
};

const saveNotes = (notes = []) => {
  fs.writeFileSync('notes.json', JSON.stringify(notes));
};
const loadNotes = () => {
  try {
    return JSON.parse(fs.readFileSync('notes.json').toString());
  } catch (error) {
    return [];
  }
};

module.exports = { addNote, removeNote, listNotes, readNote };
