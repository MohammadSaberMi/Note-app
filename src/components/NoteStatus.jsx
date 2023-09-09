function NoteStatus({notes}) {
  //dervied state
    const allNotes=notes.length;
    const completedNote=notes.filter((n)=>n.completed).length;
    const unCompletedNote=allNotes - completedNote;
    if(!allNotes) return <h2>No Notes has already been added.</h2>
  return (
    <ul className='note-status'>
        <li> 
        All <span>{allNotes}</span>
         </li>
        <li> 
        Completed <span>{completedNote}</span>
         </li>
        <li>
        Open <span>{unCompletedNote}</span>
        </li>
    </ul>
  )
}

export default NoteStatus;