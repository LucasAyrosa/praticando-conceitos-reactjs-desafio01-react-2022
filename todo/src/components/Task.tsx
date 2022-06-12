import './Task.css';
import { Trash } from 'phosphor-react';
import { ITask } from '../contracts/ITask';

interface TaskProps {
    task: ITask, 
    deleteTask: (task: ITask) => void,
    toogleCompleteTask: (task: ITask) => void
}

export function Task({ task, deleteTask, toogleCompleteTask }: TaskProps) {
    function handleDeleteTask() {
        deleteTask(task);
    }

    function handleToggleCompleteTask() {
        toogleCompleteTask(task);
    }
    
    return (
        <div className='task'>
            <input onChange={handleToggleCompleteTask} className='checkbox-round' type="checkbox" checked={task.isComplete} />
            <span>{task.content}</span>
            <button onClick={handleDeleteTask} >
                <Trash size={20} />
            </button>
        </div>
    )
}