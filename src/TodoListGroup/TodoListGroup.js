import React,{useState} from "react";
import TodoListItem from "../TodoListItem/TodoListItem";
import './styles.css'




function TodoListGroup({todoList,color,created,title}){

    const todoItemsList = todoList.map((item, index)=>{
        if (item.hasOwnProperty('filtered')&& item.filtered !== false) {
       return <TodoListItem key={index}
                            title={item.title}
                            done={item.done}
                />} return null
    })

    return(
        <div className={'todoListGroup'}>
            <div className='titleDateGroupContainer' style={{borderTopColor:color}}>
            <label className='labelTitle' >{title}</label>
            <label className='labelDate'>{created}</label>

            </div>

            {todoItemsList}
        </div>
    )
}


export default TodoListGroup;