import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AddList from "./AddList"
import {useAuth} from './../../useAuth'

const Lists = () => {

  const [lists, setLists] = useState([])
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  
  let auth = useAuth()

  useEffect(() => {
    fetchLists()
  }, [])

  // Fetch Lists
  const fetchLists = () => {

    // ** INSERT READ CODE HERE **

    // ** INSERT READ CODE ENDS **
    
  }

  // Add List
  const addList = (newList) => {

  setLoading(true)
  setErrorMessage('')
  
  // ** INSERT CREATE CODE HERE **
  
  // ** INSERT CREATE CODE ENDS **
  
  }

  // Delete List
  const deleteList = (listId) => {

    setLoading(true)
    setErrorMessage('')

    // ** INSERT DELETE CODE HERE **
  
    // ** INSERT DELETE CODE ENDS **
  }

  return (
    <div className="text-left">
      {loading && <div className="alert alert-info text-left">Loading...</div>}
      {!loading && errorMessage && <div className="alert alert-danger text-left">{errorMessage}</div>}
      <ul className="list-group">
      {!loading && (!lists || lists.length === 0) &&  <p>No lists yet. Add one below.</p>}
      {lists.map(list => (
        <li className="list-group-item d-flex align-items-start flex-column" key={list.id}>
          <span>{list.name}</span>
          <span>
            <Link className="btn-small align-left" to={`/list/${list.name}/${list.id}`}>Open</Link> | <a href="#" className="btn-small align-left" onClick={() => {deleteList(list.id)}}>Delete</a>
          </span>
        </li>
      ))}
      </ul>
      <AddList onAdd={addList} disabled={loading}/>
    </div>
  );

}
export default Lists