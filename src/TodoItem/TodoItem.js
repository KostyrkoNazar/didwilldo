import React from "react";
import './styles.css'

const TodoItem=({title, done})=>{

    return(
        <div className='todoListItem' >
            <div className='checkBoxContainer'>
            <input className='todoListItemInput'
                type='checkbox'
                   onChange={()=>console.log('Changed')}
                   checked={done}
            />
            </div>

            <label className='todoListItemLabel'>{title}</label>

        </div>
    )
}

export default TodoItem