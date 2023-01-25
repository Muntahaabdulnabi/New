import Note from "./Note";
import AddNote from "./AddNote";



const NotesList = ({ notes, handleAddNote, handleDeleteNote, handeRemoveNotes }) => {
  return (
    <div className='notes-list' >
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          text={note.text}
          date={note.date}
          handleDeleteNote={handleDeleteNote} />
      ))}
      <AddNote handleAddNote={handleAddNote} />

      <div>
        <button className='save'
          onClick={handeRemoveNotes}
          style={{ color: "red", backgroundColor: "darkgrey", padding: "1rem" }}>
          Clear all
        </button>
      </div>

    </div>
  );
};

export default NotesList;