import './Task.css';
import { Trash } from 'phosphor-react';

interface TaskProps {
    task: {
        content: string,
        done: boolean
    }
}

export function Task({ task }: TaskProps) {
    return (
        <div className='task'>
            <input className='checkbox-round' type="checkbox" checked={task.done} />
            <span>{task.content}</span>
            <button>
                <Trash size={20} />
            </button>
        </div>
    )
}