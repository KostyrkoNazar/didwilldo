import React from "react";
import './styles.css'

const TodoItem=({title, done})=>{

    return(
        <div className='todoItem' >

            <div className='checkboxContainer'>
                <input className='todoCheckbox'
                        type='checkbox'
                        checked={done}
                        onChange={()=>console.log('')}
                />
            </div>

            <div className='todoLabel'>
                <label>{title}</label>
            </div>

        </div>
    )
}

export default TodoItem