import { useState } from 'react';
import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { Tasks } from './components/Tasks';
import { ITask } from './contracts/ITask';

function App() {
  const [tasks, setTasks] = useState(new Array<ITask>());

  function createTask(task: ITask) {
    setTasks([...tasks, task]);
  }

  function deleteTask(taskToDelete: ITask) {
    setTasks(tasks.filter(task => task !== taskToDelete))
  }

  function toggleCompleteTask(taskToToggle: ITask) {
    setTasks(
      tasks.map(task => task === taskToToggle ? {
        ...task,
        isComplete: !task.isComplete
      } : task)
    )
  }


  return (
    <main>
      <Header />

      <NewTask createTask={createTask} />

      <Tasks tasks={tasks} deleteTask={deleteTask} toogleCompleteTask={toggleCompleteTask} />
    </main>
  )
}

export default App
