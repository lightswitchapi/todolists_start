import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Header from './component/Header'
import Lists from './component/Lists/Lists'
import Tasks from './component/Tasks/Tasks'
import Login from './component/Account/Login'
import {ProvideAuth} from './useAuth'
import Signup from "./component/Account/Signup"
import PrivateRoute from "./component/Account/PrivateRoute"

function App() {

  return (
    <ProvideAuth>
      <div className="App col col-md-5 col-lg-5 col-xl-4 mx-auto shadow-sm px-0 pb-3">
        <Header/>
        <div className="container mt-5">
            <Router>
              <Switch>
                <Route path="/signup">
                  <Signup/>
                </Route>
                <Route path="/login">
                  <Login/>
                </Route>
                <PrivateRoute exact path="/">
                  <Lists/>
                </PrivateRoute>
                <PrivateRoute path="/list/:listName/:listId">
                  <Tasks></Tasks>
                </PrivateRoute>
              </Switch>
            </Router>
        </div>
      </div>
    </ProvideAuth>
  );
}

export default App;
