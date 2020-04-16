import React from "react";

const TodoItem=(props)=>{

    return (
        <div>
            <label htmlFor={props.id}>{props.name}</label>
            <input {...props} />
        </div>
    )
}


export default TodoItem