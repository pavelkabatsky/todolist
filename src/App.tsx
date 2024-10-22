import './App.css';
import { taskType, Todolist } from './components/Todolist/Todolist';
import {useState} from "react";
import {v1} from "uuid";

export type FilterValuesType = "all" | "active" | "completed"

function App() {

    const taskTitle = "My Task 1"

    let [tasks,setTasks] = useState<Array<taskType>>([
        {id: v1(), title : 'HTML&CSS', isDone : true},
        {id: v1(), title : 'JS', isDone : true},
        {id: v1(), title : 'React', isDone : false},
        {id: v1(), title : 'Redux', isDone : false}
    ])
    let [filter, setFilter] = useState<FilterValuesType>('all')

    const removeTask = (id: string) => {
        let resultTask = tasks.filter(t => t.id !== id);
        setTasks(resultTask);
    }

    const changeFilter = (value : FilterValuesType) => {
        setFilter(value)
    }

    const addNewTask = (newTitle: string) => {
        const newTask = {id: v1(), title : newTitle, isDone : false}
        setTasks([...tasks, newTask]);
    }

    let taskForTodolist = tasks;
    if(filter === "active") {
        taskForTodolist = tasks.filter(task => task.isDone === false)
    }
    if(filter === "completed") {
        taskForTodolist = tasks.filter(task => task.isDone === true)
    }

    return (
        <div className="App">
            <Todolist title={taskTitle}
                      tasks={taskForTodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      addNewTask={addNewTask}/>

        </div>
    );
}

export default App;
