import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import AddTodo from "../AddTodo/AddTodo";
import './styles.css'

function TodoGroup({todoList,color,created,title, id, addTodo}){


    const todoItemsList = todoList.map((item, index)=>{

        if (item.hasOwnProperty('filtered')&& item.filtered !== false) {
            return <TodoItem key={index}
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

            <div className='todoListItemsInContainer'>
                {todoItemsList}
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