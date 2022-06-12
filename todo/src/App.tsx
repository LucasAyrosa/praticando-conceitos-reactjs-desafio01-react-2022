import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { Tasks } from './components/Tasks';

function App() {
  return (
    <main>
      <Header />

      <NewTask />
      
      <Tasks />
    </main>
  )
}

export default App
