import { useEffect } from 'react';
import { useTasks } from '../context/TaskContext';
import TaskCard from './TaskCard';

const TaskList = ({ done = false }) => {
    const { tasks, getTasks, loading } = useTasks();

    useEffect(() => {
        getTasks(done);
    }, [done]);

    const renderTasks = () => {
        if(loading) {
            return <p>Loading...</p>
        } else if(tasks.length === 0) {
            return <p>No tasks found</p>
        } else {
            return (
                <div>
                    {tasks.map((task) => (
                        <TaskCard task={task} key={task.id} />
                    ))}
                </div>
            )
        }
    };
    
    return(
        <div>{renderTasks()}</div>
    )

}

export default TaskList;