import { useEffect, useRef, useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { useContext } from 'react';
import {createTask} from '../api/tasks.api'

export function TaskModal({tasks,setTasks,handleSubmit,children,containerClassnames,taskPlaceholder,timePlaceholder, edit=false}) {
    const [isModalOpen, setModalOpen] = useState(false);
    const displayModal = () => setModalOpen(!isModalOpen);
    const formRef = useRef(null);
    const inputTaskRef = useRef(null)
    const inputTimeRef = useRef(null)

    const handleCloseClick = () => setModalOpen(!isModalOpen);

    const { isDarkMode } = useContext(ThemeContext);

    const inputClasses = isDarkMode ? 'p-2 border border-gray-700 rounded-md bg-black text-white focus:outline-none focus:ring-2 focus:ring-gray-500' : 'p-2 border border-gray-300 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500'
    const dialogClasses = isDarkMode ? "bg-blue-950 rounded-lg p-6 shadow-lg max-w-md w-full absolute bottom-1" : "bg-gray-300 rounded-lg p-6 shadow-lg max-w-md w-full absolute bottom-1"
    return (
        <> 
            <div onClick={displayModal}>
                {children}
            </div>
            
            {isModalOpen && (
                <div className={containerClassnames}>
                    <dialog open className={dialogClasses}>
                        <form ref={formRef} className="flex flex-col space-y-4">
                            <input
                                type="text"
                                placeholder={taskPlaceholder}
                                className={inputClasses}
                                ref={inputTaskRef}
                            />
                            <input
                                type="text"
                                placeholder={timePlaceholder}
                                className={inputClasses}
                                ref={inputTimeRef}
                            />
                            <div className="flex justify-between">
                                <button type='submit' onClick={(event) => handleSubmit(event, inputTaskRef, inputTimeRef, tasks, formRef,createTask,setTasks,handleCloseClick)} className={isDarkMode ? 'px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-600 transition' : 'px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition'}>{edit == true ? "Edit task" : "Add Task"}</button>
                                <button onClick={handleCloseClick} className={isDarkMode ? 'px-4 py-2 bg-red-700 text-white rounded-md hover:bg-red-600 transition' : 'px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition'}>Close</button>
                            </div>
                        </form>
                    </dialog>
                </div>
            )}
        </>
    );
}
