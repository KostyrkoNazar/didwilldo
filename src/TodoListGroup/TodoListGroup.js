import React,{useState} from "react";
import TodoListItem from "../TodoListItem/TodoListItem";
import './style.css'

function TodoListGroup(){
    const[title, setTitle]=useState('Update Renters insurance ')
    const[completed, setCompleted]=useState(false);

    function handleLabelChange(e){
        setTitle(e.target.title)
    }

    const handleCheckbox=(id)=>{
        setCompleted(id)
    }

    return(
        <div className={'todoListGroup'}>
            <TodoListItem type='checkbox'
                          title={title}
                          checked={completed}
                          handleLabelChange={()=>handleLabelChange}
                          onChange={handleCheckbox}
            />
        </div>
    )
}


export default TodoListGroup;