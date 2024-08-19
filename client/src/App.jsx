import { ThemeContext } from './contexts/ThemeContext'
import './App.css'
import { HeaderComponent } from './components/HeaderComponent';
import { TaskList } from './components/TaskList';
import {useState, useContext, useEffect } from 'react';
import { TodoInput } from './components/TodoInput';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import { TaskPage } from './pages/TaskPage';
import { TaskFormPage } from './pages/TaskFormPage';

function App() {
  const { isDarkMode } = useContext(ThemeContext);
  const defaultTasks = [
    {
      id: 1,
      title: "Complete daily report",
      time: "09:00 - 10:30",
      isChecked : true
    },
    {
      id: 2,
      title: "Attend project meeting",
      time: "11:00 - 12:00",
      isChecked : false
    },
    {
      id: 3,
      title: "Review code changes",
      time: "13:30 - 15:00",
      isChecked : false
    },
    {
      id: 4,
      title: "Write unit tests",
      time: "15:30 - 17:00",
      isChecked : false
    },
    {
      id: 5,
      title: "Prepare presentation",
      time: "17:30 - 19:00",
      isChecked : false
    },
    {
      id: 6,
      title: "Code review",
      time: "09:00 - 11:00",
      isChecked : false
    },
    {
      id: 7,
      title: "Design meeting",
      time: "11:30 - 13:00",
      isChecked : false
    },
    {
      id: 8,
      title: "Technical documentation",
      time: "14:00 - 16:00",
      isChecked : false
    },
    {
      id: 9,
      title: "Bug fixing",
      time: "16:30 - 18:00",
      isChecked : false
    },
    {
      id: 10,
      title: "Team sync-up",
      time: "18:30 - 19:30",
      isChecked : false
    }
  ];
  const [tasks, setTasks] = useState([]);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks){
      setTasks(savedTasks)
    } else {
      setTasks(defaultTasks)
      localStorage.setItem('tasks',JSON.stringify(defaultTasks))
    } 
    setIsInitialized(true)
  }, []);
  
  
  useEffect(() => {
    if (isInitialized){
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    
}, [tasks]);    


  return (
    <BrowserRouter>
    {/* <Routes>
      <Route path='/' element={<Navigate to="/tasks" />} />
      <Route path='/tasks' element={<TaskPage />} />
      <Route path='/tasks-create' element={<TaskFormPage />} />
    </Routes> */}

      <div className={isDarkMode ? 'bg-black text-white min-h-screen' : 'bg-gray-300 text-black min-h-screen'}>
        <HeaderComponent />
        <TaskList tasks={tasks} setTasks={setTasks}/>
        <TodoInput tasks={tasks} setTasks={setTasks} />
      </div>
    </BrowserRouter>
  );
}

export default App;
