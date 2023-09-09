
import { Switch, Route, useLocation } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import Signup from './views/Signup';
import ChatPage from './views/ChatPage';
import DMPage from './views/DMPage';
import Profile from './views/Profille';
import { AnimatePresence } from 'framer-motion';
import Settings from './views/Settings';

function App() {
  const location = useLocation();
  return (
      <div className="App">
        <AnimatePresence mode='sync'>
          <Switch location={location} key={location.key}>
            <Route exact path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
            
            <Route path='/chat/:deviceScreen' component={ChatPage} />
            <Route path='/message/:id' component={DMPage} />
            <Route path='/profile/:user' component={Profile} />
            <Route path='/settings' component={Settings} />
            <Home />
          </Switch>
        </AnimatePresence>
      </div>
  );
}

export default App;
