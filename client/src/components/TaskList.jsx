import { useContext, useEffect } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { TaskComponent } from './TaskComponent';
export function TaskList({tasks,setTasks}){

    const {isDarkMode} = useContext(ThemeContext)
    return(
        <>
            <section className={isDarkMode ? 'flex flex-col items-center justify-between bg-blue-950 gap-8 mt-5 p-2 py-8' : ' flex flex-col items-center justify-between bg-white gap-8 mt-5 p-2 py-8'}>
                {tasks.map((t)=><TaskComponent key={t.id} task={t} tasks={tasks} setTasks={setTasks} />)}
            </section>
        </>
    )
}
