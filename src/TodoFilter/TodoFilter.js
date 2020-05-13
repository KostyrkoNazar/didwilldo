import React, {useState} from "react";

function TodoFilter({show}) {
    const [isFiltered, setIsFiltered] = useState(false)

    const setFiltered =(value)=> {
        setIsFiltered(!value)
    }

    return(
        <div>
            <input type='checkbox'
                   value={isFiltered}
                   onChange={(e) => setFiltered(e.target.value)
                                        /*show(e.target.value)*/}

                   onClick={()=> show(isFiltered)}
            />

            <label>Show done</label>


        </div>
    )
}

export default TodoFilter