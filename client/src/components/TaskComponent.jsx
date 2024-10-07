import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faEdit, faTrashAlt, faSquare } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "../contexts/ThemeContext";
import { useContext,useState } from "react";
import {updateTask,deleteTask} from '../api/tasks.api'
import { TaskModal } from "./TaskModal";

export function TaskComponent({task,tasks,setTasks}) {
    const {isDarkMode} = useContext(ThemeContext)
    const [ischecked,setIsChecked] = useState(task.completed)


    const toggleCheck = () =>{
        setIsChecked(!ischecked)
        updateTask('completed',! ischecked,task.id)
    } 
    
    const containerClasses = isDarkMode ? "bg-black border-gray-700 text-gray-700" : "bg-white border-gray-200 text-gray-200";

    const timeClasses = isDarkMode ? "text-gray-400" : "text-gray-500";
    const taskClasses = isDarkMode ? "text-gray-300" : "text-gray-700";

    const iconClasses = isDarkMode ? "h-6 text-white sm:h-8" : "h-6 text-yellow-600 sm:h-8"

    const handleDelete = (id) => {
        deleteTask(id)
        setTasks(tasks.filter(t => t.id != id))
    }

    const handleSubmit = (event,inputTaskRef,inputTimeRef,tasks,formRef,createTask,setTasks,handleCloseClick) =>{
        event.preventDefault()
        updateTask('title',inputTaskRef.current.value,task.id,'time',inputTimeRef.current.value)
        const updatedTask = {
        ...task,
        title: inputTaskRef.current.value,
        time: inputTimeRef.current.value,
    };
        setTasks(prevTasks => prevTasks.map(t => t === task ? updatedTask : t));
        handleCloseClick()
    } 
    
    return (
        <div className={`flex items-center justify-between p-3 rounded-xl shadow-md w-3/4 border transition duration-200 ${containerClasses}`}>
            <div className={ isDarkMode ? 'flex items-center space-x-3 ' : 'flex items-center space-x-3' }>
                    <FontAwesomeIcon onClick={toggleCheck} icon={ ischecked ? faCheckSquare : faSquare} className={iconClasses} />
                    <div>
                    <div className={`text-sm ${timeClasses}`}>
                            {task.time}
                        </div>
                        <div className={`text-lg ${taskClasses }`}>
                            {task.title}
                        </div>
                    </div>
                </div>
                <div className="flex space-x-3">
                    <TaskModal tasks={tasks} setTasks={setTasks} handleSubmit={handleSubmit} containerClassnames='static' taskPlaceholder={task.title} timePlaceholder={task.time} edit={true}>
                        <FontAwesomeIcon icon={faEdit} className={iconClasses} />
                    </TaskModal>
                    <FontAwesomeIcon icon={faTrashAlt} className={iconClasses} onClick={() => handleDelete(task.id)}/>
                </div>
            </div>
        );
}
