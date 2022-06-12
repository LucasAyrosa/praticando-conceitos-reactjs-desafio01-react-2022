import { useState } from 'react';
import { Badge } from './Badge';
import { Task } from './Task';
import clipboardImg from '../assets/clipboard.svg';
import './Tasks.css';
import { ITask } from '../contracts/ITask';

interface TasksProps {
    tasks: ITask[],
    deleteTask: (task: ITask) => void,
    toogleCompleteTask: (task: ITask) => void
}

export function Tasks({ tasks, deleteTask, toogleCompleteTask }: TasksProps) {
    const totalTasks = tasks.length;
    const totalCompletedTasks = tasks.filter(task => task.isComplete === true).length;

    const tasksOrEmptyComponent = tasks.length ?
        tasks.map((task, index) => <Task
            key={task.content + index}
            task={task}
            deleteTask={deleteTask}
            toogleCompleteTask={toogleCompleteTask}
        />) :
        [
            (
                <div className='empty'>
                    <img src={clipboardImg} alt="imagem representando uma prancheta com tarefas" />
                    <p><b>Você ainda não tem tarefas cadastradas</b></p>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </div>
            )
        ]

    return (
        <div className='tasks'>
            <div className='info'>
                <div className='created'>
                    Tarefas criadas
                    <Badge content={totalTasks.toString()} />
                </div>
                <div className='done'>
                    Concluídas
                    <Badge content={totalCompletedTasks + ' de ' + totalTasks} />
                </div>
            </div>
            {tasksOrEmptyComponent}
        </div>
    )
}