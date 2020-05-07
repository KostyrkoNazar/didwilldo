import React from "react";
import './styles.css'

const TodoItem=({title, done, itemId, handleCheckbox})=>{

    console.log(done)

    return(
        <div className='todoListItem' >

            <div className='checkBoxContainer'>
                <input className='todoListItemInput'
                        type='checkbox'
                        checked={done}
                        onChange={()=>handleCheckbox( itemId)}
                />
            </div>

            <label className='todoListItemLabel'>{title}</label>

        </div>
    )
}

export default TodoItem