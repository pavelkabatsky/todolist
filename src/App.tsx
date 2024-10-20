import './App.css';
import { taskType, Todolist } from './components/Todolist/Todolist';
import {useState} from "react";

export type FilterValuesType = "all" | "active" | "completed"

function App() {

    const taskTitle = "My Task 1"

    let [tasks,setTasks] = useState<Array<taskType>>([
        {id: 1, title : 'HTML&CSS', isDone : true},
        {id: 2, title : 'JS', isDone : true},
        {id: 3, title : 'React', isDone : false},
        {id: 4, title : 'Redux', isDone : false}
    ])
    let [filter, setFilter] = useState<FilterValuesType>('all')

    const removeTask = (id: number) => {
        let resultTask = tasks.filter(t => t.id !== id);
        setTasks(resultTask);
    }

    const changeFilter = (value : FilterValuesType) => {
        setFilter(value)
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
            <Todolist title={taskTitle} tasks={taskForTodolist} removeTask={removeTask} changeFilter={changeFilter}/>

        </div>
    );
}

export default App;
