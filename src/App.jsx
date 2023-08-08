import { useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
function App() {
  const [notes,setNotes]=useState([]);


  return (<div className="container">
    <div className="note-header">note headr</div>
    <div className="note-app">
    <AddNewNote setNote = { setNotes } />
      <div className="note-container">
      <NoteList/>
      </div>
    </div>
  </div>
);
}

export default App;
