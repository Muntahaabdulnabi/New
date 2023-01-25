import { useEffect, useState } from "react";
import NotesList from "./components/NotesList";
import { nanoid } from 'nanoid'
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {
  const [notes, setNotes] = useState([]);

  const [searchText, setSearchText] = useState('');

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes'))
    setNotes(savedNotes)

  }, []);



  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes)
    );
  }, [notes]);


  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  const removeNotes = () => {
    setNotes([]);
  }


  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList notes={notes.filter((note) =>
          note.text.toLocaleLowerCase().includes(searchText)
        )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
          handeRemoveNotes={removeNotes} />
      </div>
    </div>
  );
};
export default App;
