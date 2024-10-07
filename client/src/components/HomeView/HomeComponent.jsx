import { TaskList } from "../TaskList"
export function HomeComponent({tasks,setTasks}){
    tasks = tasks.filter(t => t.category == "General")
    return (
        <TaskList tasks={tasks} setTasks={setTasks}/>
    )
    
}