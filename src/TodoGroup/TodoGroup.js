import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import './styles.css'

function TodoGroup({todoList, color, created, title}){

    const todoItems = todoList.map((item, index)=>{

        if (item.hasOwnProperty('filtered')&& item.filtered !== false) {
            return <TodoItem key={index}
                             title={item.title}
                             done={item.done}
            />}
        return null
    })



    return(
        <div className={'todoGroup'}>

            <div className='titleDateContainer' style={{borderTopColor:color}}>
                <label className='groupTitle' >{title}</label>
                 <label className='groupDate'>{created}</label>
            </div>

            <div className='itemsContainer'>
                {todoItems}
            </div>

        </div>
    )
}


export default TodoGroup;