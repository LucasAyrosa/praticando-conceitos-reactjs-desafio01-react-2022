import clipboardImg from '../assets/clipboard.svg';
import './Tasks.css';

export function Tasks() {
    return (
        <div className='tasks'>
            <div className='info'>
                <div className='created'>
                    Tarefas criadas
                </div>
                <div className='done'>
                    Concluídas
                </div>
            </div>
            <div className='empty'>
                <img src={clipboardImg} alt="" />
                <p className='bold'>Você ainda não tem tarefas cadastradas</p>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
        </div>
    )
}