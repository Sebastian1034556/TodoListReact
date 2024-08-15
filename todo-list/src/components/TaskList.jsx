import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { TaskComponent } from './TaskComponent';
import { TodoInput } from './TodoInput';

export function TaskList({tasks}){
    const {isDarkMode} = useContext(ThemeContext)
    return(
        <>
            <section className={isDarkMode ? 'flex flex-col items-center justify-between bg-blue-950 gap-8 mt-5 p-2 py-8' : ' flex flex-col items-center justify-between bg-white gap-8 mt-5 p-2 py-8'}>
                {tasks.map((t)=><TaskComponent key={t.id} task={t} />)}
            </section>
        </>
    )
}
