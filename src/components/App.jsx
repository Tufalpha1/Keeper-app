import React from 'react'
import Footer from './footer/Footer'
import Header from './header/Header'
import Note from './note/Note';
import './App.scss';
import notes from '../note';

 
const App = () => {
  return (
    <>
      <Header  />
      {notes.map((noteItem) =>
        <Note key= {noteItem.key} title={noteItem.title} content={noteItem.content} />
        )} 
      <Footer  />
    </>
  )
}

export default App
