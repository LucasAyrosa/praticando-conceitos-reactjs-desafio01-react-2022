import { Counter } from './Counter';
import clipboardImg from '../assets/clipboard.svg';
import './Tasks.css';

export function Tasks() {
    return (
        <div className='tasks'>
            <div className='info'>
                <div className='created'>
                    Tarefas criadas
                    <Counter />
                </div>
                <div className='done'>
                    Concluídas
                    <Counter />
                </div>
            </div>
            <div className='empty'>
                <img src={clipboardImg} alt="" />
                <p><b>Você ainda não tem tarefas cadastradas</b></p>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
        </div>
    )
}