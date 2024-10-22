import {Button} from "../Button/Button"
import {FilterValuesType} from "../../App";
import {ChangeEvent, KeyboardEvent, useRef, useState} from "react";
import {CurrentTask} from "../CurrentTask";


export type taskType = {
    isDone: boolean
    title: string
    id: string
}

type TodolistPropsType = {
    title: string
    tasks: Array<taskType>
    removeTask: (id: string) => void
    changeFilter: (value: FilterValuesType) => void
    addNewTask: (newTitle: string) => void

}

export const Todolist = ({title, tasks, removeTask, changeFilter, addNewTask}: TodolistPropsType) => {

    let [newTitle, setNewTitle] = useState("");

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value);
    }
    const addTaskHandler = () => {
        addNewTask(newTitle);
        setNewTitle('')
    }
    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            addNewTask(newTitle);
            setNewTitle('')
        }
    }
    const changeFilterHandler = (value: FilterValuesType) => {
        changeFilter(value);
    }

    let taskList = tasks.length === 0
        ? <div>Список дел пуст</div>
        : <ul>
            {
                tasks.map((t) => {
                    const removeTaskHandler = () => removeTask(t.id)

                    return (
                        // TODO: CurrentTask сделай сам

                        // <li key={t.id}>
                        //     <input type="checkbox"
                        //            checked={t.isDone}/>
                        //     <span>{t.title}</span>
                        //     {/*<Button title={"x"} onClick ={() => {removeTask(t.id)}}/>*/}
                        //     <button onClick={removeTaskHandler}>x
                        //     </button>
                        // </li>
                        <CurrentTask task = {t} removeTaskHandler={removeTaskHandler}/>
                    )
                })
            }
        </ul>


    return (
        <div className="todolist">
            <h3>{title}</h3>
            <div>
                <input value={newTitle}
                       onChange={onChangeInputHandler}
                       onKeyDown={onKeyPressHandler}/>
                {/*<Button onClick={onClickButtonHandler} title="+" />*/}
                <button onClick={addTaskHandler}>+</button>
            </div>
            {taskList}
            <div>
                {/*<Button title="All"*/}
                {/*        onClick={() => {*/}
                {/*            changeFilter('all')*/}
                {/*        }}/>*/}
                {/*<Button title="Active"*/}
                {/*        onClick={() => {*/}
                {/*            changeFilter('active')*/}
                {/*        }}/>*/}
                {/*<Button title="Complited"*/}
                {/*        onClick={() => {*/}
                {/*            changeFilter('completed')*/}
                {/*        }}/>*/}
                <button onClick={() => {
                    changeFilterHandler('all')
                }}>All
                </button>
                <button onClick={() => {
                    changeFilterHandler('active')
                }}>active
                </button>
                {/*<button onClick={() => {*/}
                {/*    changeFilterHandler('completed')*/}
                {/*}}>completed*/}
                {/*</button>*/}
                <Button onClick={() => {changeFilterHandler('completed')}}
                        title={"completed"}/>
            </div>
        </div>
    );
}

//
//
//
// import { Button } from "../Button/Button"
// import {FilterValuesType} from "../../App";
// import {useRef} from "react";
//
//
// export type taskType = {
//     isDone: boolean
//     title: string
//     id: string
// }
//
// type TodolistPropsType = {
//     title: string
//     tasks: Array<taskType>
//     removeTask : (id:string) => void
//     changeFilter : (value : FilterValuesType) => void
//     addNewTask: (newTitle:string) => void
//
// }
//
// export const Todolist = ({title,tasks,removeTask,changeFilter,addNewTask}: TodolistPropsType) => {
//
//     const inputRef = useRef<HTMLInputElement>(null);
//
//
//     let taskList = tasks.length === 0
//         ? <div>Список дел пуст</div>
//         :   <ul>
//             {
//                 tasks.map((t) => {
//                     return (
//                         <li key = {t.id}>
//                             <input type="checkbox"
//                                    checked={t.isDone} />
//                             <span>{t.title}</span>
//                             <Button title={"x"} onClick ={() => {removeTask(t.id)}}/>
//                         </li>
//                     )
//                 })
//             }
//         </ul>
//
//     return (
//         <div className="todolist">
//             <h3>{title}</h3>
//             <div>
//                 <input ref={inputRef}/>
//                 <Button onClick={()=> {
//                     if (inputRef.current) {
//                         addNewTask(inputRef.current.value)
//                         inputRef.current.value = ''
//                     }
//
//                 }} title="+" />
//             </div>
//             {taskList}
//             <div>
//                 <Button title="All"
//                         onClick={()=> {changeFilter('all')}}/>
//                 <Button title="Active"
//                         onClick={()=> {changeFilter('active')}}/>
//                 <Button title="Complited"
//                         onClick={()=> {changeFilter('completed')}}/>
//             </div>
//         </div>
//     );
// }

