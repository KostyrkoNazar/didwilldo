import React from "react";
import './styles.css'

function TodoSearch({onClear,onChange,value}) {

    return(
        <div className='searchTodoListByTitle'>

                <input type='text'
                       placeholder='Type note...'
                       name='search'
                       value={value}
                       onChange={(e)=>onChange(e.target.value)}
                />
                <button type='submit' onClick={onClear}>X</button>

        </div>
    )
}


export default TodoSearch