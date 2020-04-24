import React from "react";

function TodoSearch({onClear,onChange,value}) {

    return(
        <div className='todoListSearchTitle'>

        <input type='text'
                name='search'
                value={value}
                onChange={(e)=>onChange(e.target.value)}
        />

        <button type='submit' onClick={onClear}>X</button>

        </div>
    )
}


export default TodoSearch