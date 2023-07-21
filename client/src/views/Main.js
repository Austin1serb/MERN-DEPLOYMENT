import React,{useEffect, useState} from 'react'
import NoteList from '../components/NoteList'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Main = (props) => {
    const [notes, setNotes] = useState([])
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/note')
        .then(res => {
            setNotes(res.data)
          })
    },[]);

    const removeFromDom = noteID => {
        setNotes(notes.filter(note => note._id !== noteID))
    }


  return (
    <div>
       
       {/* <NoteForm onSubmitProp={createNote} initialTitle='' initialBody='' /> */}
    <hr/>
    <h1>Note Wall</h1>
    <button className='link-button' >
    <Link to={'/api/note'} >Write Note</Link>
    </button>
    <NoteList notes={notes} removeFromDom={removeFromDom} />
    
    </div>
  )
}

export default Main