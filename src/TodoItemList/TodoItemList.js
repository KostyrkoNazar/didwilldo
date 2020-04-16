import React from "react";

const TodoListItem=(props)=>{

    return(
        <div>
            <label title='label'>{props.label}</label>
            <input type='checkbox' checked={props.completed}/>
        </div>
    )
}

export default TodoListItem