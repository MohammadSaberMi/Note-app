import { useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
function App() {

  const [notes,setNotes] = useState([]);

  const handleNote=(newNote)=>{
    setNotes((prevNotes)=>[...prevNotes , newNote]);
  };

   const handleDeleteNote = (id)=>{
    //const filteredNotes= notes.filter((n)=>n.id!==id);
    //setNotes(filteredNotes);
    console.log("as");
    setNotes(prevNote=>prevNote.filter((n)=>n.id!==id));
  };

  
  return (<div className="container">
    <div className="note-header">note headr</div>
    <div className="note-app">
    <AddNewNote  onAddNote={ handleNote } />
      <div className="note-container">
      <NoteList notes={notes} onDelete={handleDeleteNote}/>
      </div>
    </div>
  </div>
);
}

export default App;
