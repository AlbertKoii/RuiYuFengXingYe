import { Link, Outlet } from 'react-router-dom';
import './App.css'
import React from 'react'

const App: React.FC = () => {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default App;
