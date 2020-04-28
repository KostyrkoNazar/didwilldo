import React from "react";

function TodoFilter({isFiltered, setFiltered}) {
    return(
        <div>
            <input type='checkbox'
                   value={isFiltered}
                    onChange={(e)=>setFiltered(e.target.value)}/>

        </div>
    )
}

export default TodoFilter