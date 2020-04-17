import React from "react";
import './style.css'

const TodoListItem=(props)=>{

    return(
        <div>
            <input type={props.type}
                   onChange={()=>props.onChange}
                   checked={props.checked}
            />
            <label onChange={()=>props.handleLabelChange}>{props.title}</label>
        </div>
    )
}

export default TodoListItem