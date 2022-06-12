import { Counter } from './Counter';
import { Task } from './Task';
import clipboardImg from '../assets/clipboard.svg';
import './Tasks.css';

const tasks: { id: number, content: string, done: boolean }[] = [
    { id: 1, content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.', done: false },
    { id: 2, content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.', done: false },
    { id: 3, content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.', done: false },
    { id: 4, content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.', done: true },
    { id: 5, content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.', done: true }
]

const totalTasks = tasks.length;
const totalDoneTasks = tasks.filter(task => task.done === true).length;

const tasksOrEmptyComponent = tasks.length ?
    tasks.map(task => <Task key={task.id} task={task} />) :
    [
        (
            <div className='empty'>
                <img src={clipboardImg} alt="imagem representando uma prancheta com tarefas" />
                <p><b>Você ainda não tem tarefas cadastradas</b></p>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
        )
    ]

export function Tasks() {
    return (
        <div className='tasks'>
            <div className='info'>
                <div className='created'>
                    Tarefas criadas
                    <Counter count={totalTasks} />
                </div>
                <div className='done'>
                    Concluídas
                    <Counter count={totalDoneTasks} />
                </div>
            </div>
            {tasksOrEmptyComponent}
        </div>
    )
}