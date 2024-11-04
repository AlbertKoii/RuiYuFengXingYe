import { Link, Outlet } from 'react-router-dom';
import './App.css'
import React from 'react'
import Home from './pages/Home'

const App: React.FC = () => {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/"><></></Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default App;
