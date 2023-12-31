import { useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";
import NoteHeader from "./components/NoteHeader";
function App() {

  const [notes,setNotes] = useState([]);
  const [sortBy ,setSortBy]= useState("latest");

  const handleNote=(newNote)=>{
    setNotes((prevNotes)=>[...prevNotes , newNote]);
  };

   const handleDeleteNote = (id)=>{ 
    //const filteredNotes= notes.filter((n)=>n.id!==id);
    //setNotes(filteredNotes);
    setNotes(prevNote=>prevNote.filter((n)=>n.id!==id));
  };
 
  const handleCompleteNote=(e)=>{
    //console.log(e.target.value);
    const noteId =Number(e.target.value);
    //const newNote=notes.map((note)=>note.id === noteId ? {...note,completed:!note.completed}:note);
    //setNotes(newNote);
    setNotes((prevNote)=>prevNote.map((note)=>note.id === noteId ? {...note,completed:!note.completed}:note))
  }

  return (<div className="container">
  <NoteHeader notes={notes} sortBy={sortBy} onSort={e=>setSortBy(e.target.value)}/>
    <div className="note-app">
    <AddNewNote  onAddNote={ handleNote } />
      <div className="note-container">
      <NoteStatus notes={notes} />
      <NoteList 
      notes={notes}
      sortBy={sortBy}  
      onDelete={handleDeleteNote} 
      onComplete={handleCompleteNote}
      />
      </div>
    </div>
  </div>
);
}

export default App;
