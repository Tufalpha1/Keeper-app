import React from 'react';
import './Note.scss'

const Note = (props) => {
  const handleClick= ()=>{
    props.onDelete(props.id);
  }
  return (
    <>
      <div className='note'>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={handleClick}>Delete</button>
      </div>
      
    </>
  )
}

export default Note
