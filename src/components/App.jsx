import React, { useState } from 'react'
import Footer from './footer/Footer'
import Header from './header/Header'
import Note from './note/Note';
import './App.scss';
import CreateArea from './createarea/CreateArea';

 
const App = () => {
  const [notes, setNotes]= useState([]);

  const addNote = (note)=>{
    setNotes(prevItems => {
      return [...prevItems, note];
    });
  }
  const deleteNote= (id)=> {
    setNotes(prevItems => {
      return prevItems.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <>
      <Header  />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) =>
        <Note key= {index} id={index} title={noteItem.title} content={noteItem.content} onDelete={deleteNote}/>
        )} 
      <Footer  />
    </>
  )
}

export default App
