import React from "react";
import './styles.css'

const TodoItem=({title, done,handleChange})=>{

    return(
        <div className='todoListItem' >

            <div className='checkBoxContainer'>
                <input className='todoListItemInput'
                        type='checkbox'
                        checked={done}
                        onChange={()=>handleChange(done)}
                />
            </div>

            <label className='todoListItemLabel'>{title}</label>

        </div>
    )
}

export default TodoItem