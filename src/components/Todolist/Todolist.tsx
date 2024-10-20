
import { Button } from "../Button/Button"
import {FilterValuesType} from "../../App";


export type taskType = {
    isDone: boolean
    title: string
    id: number
}

type TodolistPropsType = {
    title: string
    tasks: Array<taskType>
    removeTask : (id:number) => void
    changeFilter : (value : FilterValuesType) => void

}

export const Todolist = (props: TodolistPropsType) => {

    let taskList = props.tasks.length === 0 
    ? <div>Список дел пуст</div> 
    :   <ul>
            {
                props.tasks.map((t) => {
                    return (
                        <li key = {t.id}>
                            <input type="checkbox"
                                checked={t.isDone} />
                            <span>{t.title}</span>
                            <Button title={"x"} onClickHandler ={() => {props.removeTask(t.id)}}/>
                       </li>
                    )
                })
            }
        </ul>

    return (
        <div className="todolist">
            <h3>{props.title}</h3>
            <div>
                <input />
                <Button title="+" />
            </div>
                {taskList}
            <div>
                <Button title="All"
                        onClickHandler={()=> {props.changeFilter('all')}}/>
                <Button title="Active"
                        onClickHandler={()=> {props.changeFilter('active')}}/>
                <Button title="Complited"
                        onClickHandler={()=> {props.changeFilter('completed')}}/>
            </div>
        </div>
    );
}

