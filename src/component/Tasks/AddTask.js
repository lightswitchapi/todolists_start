import { useState } from 'react'

const AddList = ({onAdd, listId, disabled}) => {

    const [description, setDescription] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if (!description) {
            alert('Please specify a task description')
            return
        }
        onAdd(description)
        
        setDescription('')
    }

    return (
        <form className="mt-2" onSubmit={onSubmit}>
          <input 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                type="text" 
                className="form-control" 
                placeholder="New task" />
          <button type="submit" disabled={disabled} className="form-control btn btn-primary mt-2">Add</button>
      </form>
    )
}

export default AddList
