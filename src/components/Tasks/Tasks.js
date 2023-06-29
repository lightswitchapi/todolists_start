import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import AddTask from './AddTask'
import {useAuth} from '../../hooks/useAuth'

const Tasks = ({params}) => {

  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  
  let auth = useAuth()

  let { listId, listName } = useParams()

  useEffect(() => {
    if (listId)
      fetchTasks(listId)
  }, [])

  // Fetch tasks
  const fetchTasks = (listId) => {
    
    // ** INSERT READ CODE HERE **
  
    // ** INSERT READ CODE ENDS **

  }

  // Add Task
  const addTask = (description) => {

    setLoading(true)
    
    // ** INSERT CREATE CODE HERE **

    // ** INSERT CREATE CODE ENDS **

  }

  // Update Task
  const updateTask = (taskId, taskDone) => {

    setLoading(true)

    // ** INSERT UPDATE CODE HERE **

    // ** INSERT UPDATE CODE ENDS **

  }

  // Delete Task
  const deleteTask = (taskId) => {

    setLoading(true)
    
    // ** INSERT DELETE CODE HERE **
    
    // ** INSERT DELETE CODE ENDS **

  }

  return (
    <div className="text-left">
    {loading && <div className="alert alert-info text-left">Loading...</div>}
    {!loading && errorMessage && !loading && <div className="alert alert-danger text-left">{errorMessage}</div>}
    <div className="card">
    <div className="card-header">{listName}</div>
    <div className="card-body">
      <div className="list-group">
      {(!tasks || tasks.length === 0) && <p>No items yet. Add one below.</p>}
      {tasks.map(task => (
        <div className="list-group-item d-flex align-items-start flex-column" key={task.id}>
          <div className="form-check mb-3">
            <input disabled={loading} type="checkbox" className="form-check-input" checked={task.done} onChange={(e) => updateTask(task.id, e.target.checked) }/>
            <label className="form-check-label">{task.description}</label>
          </div>
          <button className="btn btn-secondary btn-sm" onClick={(e) => deleteTask(task.id)}>Delete</button>
        </div>
      ))}
      </div>
      <AddTask onAdd={addTask} listId={listId} disabled={loading}/>
      <Link className="form-control btn btn-secondary mt-2" to={`/`}>Back</Link>
      </div>
    </div>
  </div>
  )
}

export default Tasks