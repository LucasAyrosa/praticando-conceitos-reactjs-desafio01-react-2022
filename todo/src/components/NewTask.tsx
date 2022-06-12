import './NewTask.css';
import { PlusCircle } from 'phosphor-react';

export function NewTask() {
    return (
        <div className='new-task'>
            <input type="text" placeholder='Adicione uma nova tarefa' />
            <button>
                Criar
                <PlusCircle size={16} weight="bold" />
            </button>
        </div>
    )
}