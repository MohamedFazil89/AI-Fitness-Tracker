import React from 'react';
import { auth } from '../firebase/firebase.js';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/'); // Use navigate instead of history.push
  };

  return (
    <div className="dashboard-container">
      <h2>Welcome to Your Fitness Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
