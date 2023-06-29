import { useState } from 'react'

const AddList = ({onAdd, disabled}) => {

    const [name, setName] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if (!name) {
            alert('Please specify a list name')
            return
        }
        onAdd({ name: name })
        setName('')
    }

    return (
        <form className="mt-2" onSubmit={onSubmit}>
                <input 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text" 
                    className="form-control" 
                    placeholder="New list" />
            <button type="submit" disabled={disabled} className="form-control btn btn-primary mt-2">
                Add
            </button>
        </form>
    )
}

export default AddList
