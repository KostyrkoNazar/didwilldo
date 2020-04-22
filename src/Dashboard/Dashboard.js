import React,{useState} from "react";
import TodoListGroup from "../TodoListGroup/TodoListGroup";
import TodoSearch from "../TodoSearch/TodoSearch";
import data from "../data/data";

function Dashboard() {
    const [typeNote, setTypeNote]=useState([])
    const [todoGroupArray, setTodoArray]=useState(data)

    const todoListGroup = todoGroupArray.map((obj, objIndex)=>
            <TodoListGroup key={objIndex}
                           color={obj.color}
                           title={obj.title}
                           created={obj.created}
                           todoList={obj.todoList}/>)

    const onFilteredChange=( searchValue)=>{
        setTypeNote(searchValue)
    }

    return(
        <div className='dashboard'>
            <TodoSearch onFilterClear={''}
                        onFilteredChange={onFilteredChange}
                        state={typeNote}
            />

            {todoListGroup}

        </div>
    )
}

export default Dashboard