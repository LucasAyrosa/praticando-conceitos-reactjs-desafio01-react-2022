import './Task.css';
import { Trash } from 'phosphor-react';
import { ITask } from '../contracts/ITask';

interface TaskProps {
    task: ITask, 
    deleteTask: (task: ITask) => void
}

export function Task({ task, deleteTask }: TaskProps) {
    function handleDeleteTask() {
        deleteTask(task);
    }
    
    return (
        <div className='task'>
            <input className='checkbox-round' type="checkbox" checked={task.done} />
            <span>{task.content}</span>
            <button onClick={handleDeleteTask} >
                <Trash size={20} />
            </button>
        </div>
    )
}