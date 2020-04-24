import React, {useEffect, useState} from "react";
import TodoListGroup from "../TodoListGroup/TodoListGroup";
import TodoSearch from "../TodoSearch/TodoSearch";
import data from "../data/data";

function Dashboard() {
    const [searchValue, setSearchValue] = useState('')
    const [todoGroupArray, setTodoArray] = useState([])
    const [isSorted, setIsSorted] = useState([])

    const onClear = () => setSearchValue('');

    const onChange = (str) => {
        setSearchValue(str)
    }

    const search = (searchValue, searchedArray) => {
        return searchedArray.map((obj) => {
            if (obj.title.startsWith(searchValue) === true) {
                return obj;
            }
        })
    }

    useEffect(()=>{
        if (searchValue.length === 0) {
           console.log(setTodoArray(data));
        } else {
            const searchResult= search(searchValue, data);
                setTodoArray(searchResult);
         //console.log( searchResult);
         }},[searchValue])

    // if (searchValue.length === 0) {
    //     setTodoArray(data)
    // } else {
    //     const searchResult= search(searchValue, data);
    //     setTodoArray(searchResult);
    // }

    return(
        <div className='dashboard'>
            <TodoSearch onClear={onClear}
                        onChange={onChange}
                        value={searchValue}
            />


        </div>
    )
}

export default Dashboard