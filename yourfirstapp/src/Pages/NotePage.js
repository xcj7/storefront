// import React from 'react';
// import { useParams } from 'react-router-dom';
// import notes from '../assets/data';
// const NotePage =  () => {
//     const { id } = useParams();
//     let noteId=useParams()
//     let note=notes.find(note =>  notes.id === Number(noteId))
//     console.log("Props :",note)
    
//   return (
//     <div>
//       <h1>{noteId}</h1>
  
//     </div>
//   )
// }

// export default  NotePage;
///////////////////////////////////////////////////
// NoteDetail.js
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import notes from '../assets/data';
import {ReactComponent as ArrowLeft} from '../assets/arrow-left.svg'
// myfirstreactapp\yourfirstapp\src\assets\arrow-left.svg

const NotePage = () => {
const { id } = useParams();

  // Convert 'id' to a number if needed
  const noteId = parseInt(id, 10);

  // Use the 'find' function to get the note with the specified id
  const foundNote = notes.find(note => note.id === noteId);

  return (
    <div className='note'>
      <div className='note-header'>
        <h3> 
          <Link to="/">
            <ArrowLeft />
          </Link>
        <textarea value={foundNote?.body}>
        </textarea>

        {foundNote ? (
        <div>
          <h1>Note ID: {foundNote?.id}</h1>
          <p>Content: {foundNote?.body}</p>
          <p>updated: {foundNote?.updated}</p>
          {/* Other note details */}
        </div>
      ) : (
        <p>Note not found</p>
      )}
      
        </h3>
      </div>
      
    </div>
  );
};

export default NotePage;
