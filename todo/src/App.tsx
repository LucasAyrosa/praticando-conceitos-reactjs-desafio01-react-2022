import { useState } from 'react';
import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { Tasks } from './components/Tasks';
import {ITask} from './contracts/ITask';

function App() {
  const [tasks, setTasks] = useState(new Array<ITask>());

  function createTask(task: ITask) {
    setTasks([...tasks, task]);
  }

  function deleteTask(taskToDelete: ITask) {
    setTasks(tasks.filter(task => task !== taskToDelete))
  }


  return (
    <main>
      <Header />

      <NewTask createTask={createTask} />
      
      <Tasks tasks={tasks} deleteTask={deleteTask} />
    </main>
  )
}

export default App
