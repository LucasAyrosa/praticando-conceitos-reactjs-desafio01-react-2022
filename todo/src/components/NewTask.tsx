import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import './NewTask.css';
import { PlusCircle } from 'phosphor-react';
import { ITask } from '../contracts/ITask';

interface NewTaskProps {
    createTask: (task: ITask) => void;
}

export function NewTask({ createTask }: NewTaskProps) {
    const [newTaskText, setNewTaskText] = useState('');

    function handleCreateTask(event: FormEvent) {
        event.preventDefault();
        if (newTaskText.trim()) {
            createTask({ content: newTaskText, done: false });
            setNewTaskText('');
        }
    }

    function handleNewTaskText(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('');
        setNewTaskText(event.target.value);
    }

    function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
        event.target.setCustomValidity('Campo obrigatório');
    }

    return (
        <form className='new-task' onSubmit={handleCreateTask}>
            <input
                type="text"
                placeholder='Adicione uma nova tarefa'
                onChange={handleNewTaskText}
                value={newTaskText}
                onInvalid={handleNewTaskInvalid}
                required
            />

            <button onClick={handleCreateTask} type='submit' >
                Criar
                <PlusCircle size={16} weight="bold" />
            </button>
        </form>
    )
}