import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";
import Lists from "./components/Lists/Lists";
import Tasks from "./components/Tasks/Tasks";
import Login from "./components/Account/Login";
import Signup from "./components/Account/Signup";
import ProtectedRoute from "./components/Account/ProtectedRoute";
import { AuthProvider } from "./hooks/useAuth";

function App() {
  return (
    <AuthProvider>
      <div className="App col col-md-5 col-lg-5 col-xl-4 mx-auto shadow-sm px-0 pb-3">
        <Header />
        <div className="container mt-5">
          <Router>
            <Routes>
              <Route path="/signup" element={<Signup />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <Lists />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/list/:listName/:listId"
                element={
                  <ProtectedRoute>
                    <Tasks></Tasks>
                  </ProtectedRoute>
                }
              />
            </Routes>
          </Router>
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
