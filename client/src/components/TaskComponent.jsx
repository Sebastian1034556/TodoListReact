import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faEdit, faTrashAlt, faSquare } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "../contexts/ThemeContext";
import { useContext,useState } from "react";

export function TaskComponent({task,tasks,setTasks}) {
    const {isDarkMode} = useContext(ThemeContext)
    const [ischecked,setIsChecked] = useState(task.isChecked)


    const toggleCheck = () =>{
        setIsChecked(!ischecked)
        const tasksCopy = tasks.map(t => t === task ? { ...t, isChecked: !ischecked } : t)
        setTasks(tasksCopy)
    } 

    const containerClasses = isDarkMode ? "bg-black border-gray-700 text-gray-700" : "bg-white border-gray-200 text-gray-200";

    const timeClasses = isDarkMode ? "text-gray-400" : "text-gray-500";
    const taskClasses = isDarkMode ? "text-gray-300" : "text-gray-700";

    const iconClasses = isDarkMode ? "h-6 text-white sm:h-8" : "h-6 text-yellow-600 sm:h-8"

    const handleDelete = (id) => {
        setTasks(tasks.filter(t => t.id != id))
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
                    <FontAwesomeIcon icon={faEdit} className={iconClasses} />
                    <FontAwesomeIcon icon={faTrashAlt} className={iconClasses} onClick={() => handleDelete(task.id)}/>
                </div>
            </div>
        );
}
