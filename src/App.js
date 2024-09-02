import React from 'react';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';
// pages import
import Explore from './Pages/Explore';
import Chat from './Pages/Chat';
import LeadBoard from './Pages/LeadBoard';
import Plans from './Pages/Plans';
import Settings from './Pages/Settings';
import Question from './components/Question';


function AppRoutes() {
  // Define your routes here
  let routes = useRoutes([
    { path: '/', element: <Signup /> },
    { path: '/Login', element: <Login /> },
    { path: '/dashboard', element: <Dashboard /> },
    { path: '/Explore', element: <Explore /> },
    { path: '/Chat', element: <Chat /> },
    { path: '/LeadBoard', element: <LeadBoard /> },
    { path: '/Plans', element: <Plans /> },
    { path: '/Settings', element: <Settings /> },
    { path: '/Questions', element: <Question /> },






  ]);

  return routes;
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
