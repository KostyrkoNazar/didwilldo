import React from "react";

function TodoSearch({onFilteredChange,onFilterClear,typeNote}) {

    return(
        <div className='todoSearch'>
        <input type='text'
                name='search'
                value={typeNote}
                onChange={(e)=>onFilteredChange(e.target.value)}
        />
        <button type='submit' onClick={()=>onFilterClear()}>X</button>

        </div>
    )
}


export default TodoSearch