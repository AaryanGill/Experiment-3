import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <Link to="/" className="logo">My Profile</Link>
          <div className="nav-links">
            {/* These links navigate between the components */}
            <Link to="/">Profile</Link>
            <Link to="/dashboard">Dashboard</Link>
          </div>
        </nav>

        <main className="main-content">
          <Routes>
            {/* This Route makes the Profile show automatically on load */}
            <Route path="/" element={<Profile />} />
            <Route path="/dashboard" element={<Dashboard />} />
            {/* Redirects any unknown path back to Profile */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;