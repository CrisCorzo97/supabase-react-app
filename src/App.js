import { useEffect } from 'react';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { client } from './supabase/client';
import { TaskContextProvider } from './context/TaskContext';
import Navbar from './components/Navbar';

import Login from './pages/Login';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {

  const navigate = useNavigate();

  useEffect(() => {
    client.auth.onAuthStateChange((event, session) => {
      if(!session) {
        navigate('/login')
      } else {
        navigate('/')
      }
    })
  }, [])

  return (
    <div className="App">
      <TaskContextProvider>
        <Navbar />
        
        <div className="container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </TaskContextProvider>
    </div>
  );
}

export default App;
