import React from 'react';
import {taskType} from "./Todolist/Todolist";

type CurrentTaskPropsType = {
    task: taskType,
    removeTaskHandler : () => void
}
export const CurrentTask = ({task,removeTaskHandler} : CurrentTaskPropsType ) => {
    return (
        <li key={task.id}>
            <input type="checkbox"
                   checked={task.isDone}/>
            <span>{task.title}</span>
            {/*<Button title={"x"} onClick ={() => {removeTask(t.id)}}/>*/}
            <button onClick={removeTaskHandler}>x
            </button>
        </li>
    );
};