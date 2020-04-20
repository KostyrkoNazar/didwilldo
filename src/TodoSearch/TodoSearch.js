import React, {useState} from "react";

function TodoSearch({todoArrayList,onFilteredChange,onFilterClear}) {

    return(
        <div className='todoSearch'>
        <input type='text'
                name='search'
               placeholder={'Type note...'}
                value={''}
                onChange={(e)=>onFilteredChange(e.target.value, todoArrayList)}
        />
        <button type='submit' onClick={()=>onFilterClear()}>X</button>

        </div>
    )
}


export default TodoSearch