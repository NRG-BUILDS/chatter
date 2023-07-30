
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import Signup from './views/Signup';
import ChatPage from './views/ChatPage';
import DMPage from './views/DMPage';
import Profile from './views/Profille';

function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <Route path='/profile/:user' component={Profile} />
          <Route path='/chat/:deviceScreen' component={ChatPage} />
          <Route path='/message/:id' component={DMPage} />
          <Home />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
