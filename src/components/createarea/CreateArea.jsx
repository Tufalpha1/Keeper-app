import React, { useState } from 'react'
import './CreateArea.scss'

const CreateArea = (props) => {
    const [note, setNote]= useState({
        title: "",
        content: ""
    })

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
  return (
    <>
     <form>
        <input name='title' onChange={handleChange} value={note.title} placeholder='Title' />
        <textarea name="content" onChange={handleChange} value={note.content} placeholder="Take a note..." rows="3"></textarea>
        <button onClick={submitNote}>Add</button>
     </form> 
    </>
  )
}

export default CreateArea
