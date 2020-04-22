import React from "react";

function TodoSearch({todoesArrayList,onFilterClear}) {

    return(
        <div className='todoSearch'>
        <input type='text'
                name='search'
                value={''}
                onChange={(e)=>(e.target.value)}
        />
        <button type='submit' onClick={()=>onFilterClear()}>X</button>

        </div>
    )
}


export default TodoSearch