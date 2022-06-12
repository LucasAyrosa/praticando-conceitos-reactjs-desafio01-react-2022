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


  return (
    <main>
      <Header />

      <NewTask createTask={createTask} />
      
      <Tasks tasks={tasks} />
    </main>
  )
}

export default App
