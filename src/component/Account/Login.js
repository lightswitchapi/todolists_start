import { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useAuth } from './../../useAuth'

const Login = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading ] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  let auth = useAuth()
  let history = useHistory()
  let location = useLocation()
  let { from } = location.state || { from: { pathname: "/" } }

  const validate = () => {

    if (!username){
      setErrorMessage('Username is required')
      return false
    }

    if (!password){
      setErrorMessage('Password is required')
      return false
    }

    return true
  }

  const onSubmit = (e) => {

    e.preventDefault()

    if (!validate())
      return

    setLoading(true)

    // ** INSERT AUTHENTICATION CODE HERE **

    // ** INSERT AUTHENTICATION CODE ENDS **

  }

  const Signup = () => {
    history.push('/signup')
  }

  return (
    <div className="card mx-auto">
      <div className="card-header">
      Login
      </div>
      <div className="card-body">
      {loading && <div className="alert alert-info text-left">Signing in...</div>}
      {errorMessage && !loading && <div className="alert alert-danger text-left">{errorMessage}</div>}
      <form className="text-left" onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div className="form-group float-md-right">
          <button onClick={Signup} type="button" className="btn btn-secondary">Sign up</button>
          <button disabled={loading} type="submit" className="btn btn-primary ml-1">Login</button>
        </div>
      </form>
      </div>
    </div>
      
  )
}
export default Login
