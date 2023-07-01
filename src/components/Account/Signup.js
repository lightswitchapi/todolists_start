import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

const Signup = () => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading ] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  let auth = useAuth()
  let navigate = useNavigate()

  let location = useLocation()
  let { from } = location.state || { from: { pathname: "/" } }

  // signup
  const signup = (e) => {

    e.preventDefault()
    
    if (!validate())
      return;

    setLoading(true)

    // ** INSERT CREATE USER CODE HERE **

    // ** INSERT CREATE USER CODE ENDS **
    
  }

  const validate = () => {
    if (password !== confirmPassword)
    {
      alert('Confirm password value does not match');
      return false;
    }

    return true;
  }

  const back = () => {
    navigate('/login')
  }

  return (
    <div className="card mx-auto">
      <div className="card-header">
      Sign up
      </div>
      <div className="card-body">
      {loading && <div className="alert alert-info text-left">Signing in...</div>}
      {errorMessage && !loading && <div className="alert alert-danger text-left">{errorMessage}</div>}
      <form className="text-left" onSubmit={signup}>
        <div className="mb-2">
          <label>First name</label>
          <input type="text" required className="form-control" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
        </div>
        <div className="mb-2">
          <label>Last name</label>
          <input type="text" required className="form-control" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
        </div>
        <div className="mb-2">
          <label>Username</label>
          <input type="text" required className="form-control" value={username} onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div className="mb-2">
          <label>Email</label>
          <input type="email" required className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="mb-2">
          <label>Password</label>
          <input type="password" required className="form-control" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div className="mb-2">
          <label>Confirm password</label>
          <input type="password" required className="form-control" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
        </div>
        <div className="mb-2 d-flex justify-content-end">
          <button onClick={back} type="button" className="btn btn-secondary">Back</button>
          <button disabled={loading} type="submit" className="btn btn-primary ms-1">Sign up</button>
        </div>
      </form>
      </div>
    </div>
      
  )
}
export default Signup
