import { Route, Redirect } from 'react-router-dom'
import { useAuth } from './../../useAuth'

const PrivateRoute = ({children, ...rest}) => {

    let auth = useAuth()

    return (
        <Route
      {...rest}
      render={({ location }) =>
      auth.validateToken() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    )
}

export default PrivateRoute
