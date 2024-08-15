import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { useContext } from 'react';

export function TodoInput() {
    const [isModalOpen, setModalOpen] = useState(false);
    const displayModal = () => setModalOpen(!isModalOpen);
    const formRef = useRef(null);
    const inputTaskRef = useRef(null)
    const inputTimeRef = useRef(null)


    const [tasks,setTasks] = useState([])
    useEffect(()=>{
        const savedTasks = JSON.parse(localStorage.getItem('tasks'))
        setTasks(savedTasks)
    },[])

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);    

    const handleSubmit = (event) =>{
        event.preventDefault()
        const lastId = tasks.reduce((maxId, t) => t.id > maxId ? t.id : maxId, 0);

        const newTask = {
            id : lastId + 1,
            title : inputTaskRef.current.value,
            time : inputTimeRef.current.value
        }
        
        setTasks(prev => [...prev, newTask])

        formRef.current.reset()
    } 

    const handleCloseClick = () => setModalOpen(!isModalOpen);


    const { isDarkMode } = useContext(ThemeContext);

    const inputClasses = isDarkMode ? 'p-2 border border-gray-700 rounded-md bg-black text-white focus:outline-none focus:ring-2 focus:ring-gray-500' : 'p-2 border border-gray-300 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500'
    const dialogClasses = isDarkMode ? "bg-blue-950 rounded-lg p-6 shadow-lg max-w-md w-full absolute bottom-1" : "bg-gray-300 rounded-lg p-6 shadow-lg max-w-md w-full absolute bottom-1"
    return (
        <>
            <div className='flex justify-center items-center mt-1'>
                <FontAwesomeIcon onClick={displayModal} icon={faPlus} />
            </div>
            {isModalOpen && (
                <div className='relative'>
                    <dialog open className={dialogClasses}>
                        <form ref={formRef} className="flex flex-col space-y-4">
                            <input
                                type="text"
                                placeholder="Enter new task"
                                className={inputClasses}
                                ref={inputTaskRef}
                            />
                            <input
                                type="text"
                                placeholder="Enter the time for the task"
                                className={inputClasses}
                                ref={inputTimeRef}
                            />
                            <div className="flex justify-between">
                                <button type='submit' onClick={handleSubmit} className={isDarkMode ? 'px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-600 transition' : 'px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition'}>Add Task</button>
                                <button onClick={handleCloseClick} className={isDarkMode ? 'px-4 py-2 bg-red-700 text-white rounded-md hover:bg-red-600 transition' : 'px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition'}>Close</button>
                            </div>
                        </form>
                    </dialog>
                </div>
            )}
        </>
    );
}
