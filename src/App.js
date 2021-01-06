import "./App.css";
import Login from "./pages/Login";
import Room from "./pages/Room";
import SignUp from "./pages/SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./AuthService";
import LoggedInRoute from "./LoggedInRoute";

function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <Router>
          <Switch>
            <LoggedInRoute exact path='/' component={Room} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={SignUp} />
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
