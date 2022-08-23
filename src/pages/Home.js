import { useEffect, useState } from 'react';
import { client } from '../supabase/client';
import { useNavigate } from 'react-router-dom';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

function Home() {
  const [showTasksDone, setShowTasksDone] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if(!client.auth.user()) {
      navigate('/login');
    };
  }, [navigate]);
  

  return (
    <div className='row pt-4'>
      <div className="col-md-4 offset-md-4">
        <button onClick={() => client.auth.signOut()} >
          Logout
        </button>
        <TaskForm /> 
        <header className='d-flex justify-content-between my-3'>
          <span className='h5'>
            {showTasksDone ? "Tasks done" : "Tasks to do"}
          </span>
          <button onClick={() => setShowTasksDone(!showTasksDone)} className="btn btn-dark btn-sm">
            {showTasksDone ? "Show tasks to do" : "Show tasks done"}
          </button>
        </header>

        <TaskList done={showTasksDone} />

      </div>
    </div>
  )
}

export default Home;