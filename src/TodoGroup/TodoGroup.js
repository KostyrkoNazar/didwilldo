import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import AddTodo from "../AddTodo/AddTodo";
import './styles.css'

function TodoGroup({todoList, color, created, title, id, addTodo, handleCheckbox}){

    const todoItems = todoList.map((item, index)=>{

        if (item.hasOwnProperty('filtered')&& item.filtered !== false) {
            return <TodoItem key={index}
                             title={item.title}
                             done={item.done}
                             itemId={item.itemId}
                             handleCheckbox={handleCheckbox}
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

            <div>
                <AddTodo addNewTodo={addTodo}
                         id={id}
                />
            </div>

        </div>
    )
}


export default TodoGroup;