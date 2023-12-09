// import React from 'react'

// const Listitem = (props) => {
//     console.log('PROPS',props)
//   return (
//     <div>
//       <h3>{props.note.body}</h3>
//     </div>
//   )
// }

// export default Listitem

//////////////////////////////////////////////////////////////////

import React from 'react'
import { Link } from 'react-router-dom';


const Listitem = ({note}) => {
  return (
    <Link to ={'/note/${note.id}'}>
    
    <div>
      <h3>{note.body}</h3>
    </div>
    </Link>
  )
}

export default Listitem;
