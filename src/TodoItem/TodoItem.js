import React from "react";
import './styles.css'

const TodoItem=({title, done, itemId, handleCheckbox})=>{

    console.log(done)

    return(
        <div className='todoItem' >

            <div className='checkboxContainer'>
                <input className='todoCheckbox'
                        type='checkbox'
                        checked={done}
                        onChange={()=>handleCheckbox( itemId)}
                />
            </div>

            <div className='todoLabel'>
                <label>{title}</label>
            </div>

        </div>
    )
}

export default TodoItem