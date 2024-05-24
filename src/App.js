import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import DrawingCanvas from './pages/DrawingCanvas';

function App() {
  return (
    <div className="App">
      <nav className="bg-gray-800 p-4">
        <ul className="flex space-x-4">
          <li><Link to="/login" className="text-white">Login</Link></li>
          <li><Link to="/signup" className="text-white">Signup</Link></li>
          <li><Link to="/dashboard" className="text-white">Dashboard</Link></li>
          <li><Link to="/draw" className="text-white">Draw</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/draw" component={DrawingCanvas} />
        <Route path="/" exact component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;