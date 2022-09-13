import React, { useState } from 'react';
import './CreateArea.scss';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { Zoom } from '@material-ui/core';

const CreateArea = (props) => {
    const [note, setNote]= useState({
        title: "",
        content: ""
    })

    const [isExpanded, setExpanded] = useState(false);

    const handleChange = (event)=>{
    const {name, value} = event.target;
    setNote((prevItems)=>{
        return{
            ...prevItems,
            [name]: value   
        }
    });
    }

    const submitNote= (event)=> {
        props.onAdd(note);
        setNote({
          title: "",
          content: ""
        });
        event.preventDefault();
      }    
    
      const expand = ()=>{
        setExpanded(true);
      }
  return (
    <>
     <form className='create-note'>
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
         )}
        <textarea
         name="content"
         onClick={expand}
         onChange={handleChange}
         value={note.content}
         placeholder="Take a note..."
         rows={isExpanded ? 3 : 1}
         />
        <Zoom in={isExpanded}>
         <Fab className='Fab' onClick={submitNote}><AddIcon  /></Fab>
        </Zoom>
     </form> 
    </>
  )
}

export default CreateArea
