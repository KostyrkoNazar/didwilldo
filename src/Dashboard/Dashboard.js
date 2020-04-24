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
        searchedArray.map(obj =>{
            if (obj.title.startsWith(searchValue)===true) {
                return obj;
            } else {
                return null
            }
        }).filter(item=>item !== null)
    }

    useEffect(()=>{
        if (searchValue.length === 0) {
            setTodoArray(data);
        } else {
            const searchResult= search(searchValue, data);
                setTodoArray(searchResult);
         }},[searchValue])


    const todoListGroup = todoGroupArray.map((obj, objIndex)=>
        <TodoListGroup key={objIndex}
                       color={obj.color}
                       title={obj.title}
                       created={obj.created}
                       todoList={obj.todoList}/>)


    return(
        <div className='dashboard'>
            <TodoSearch onClear={onClear}
                        onChange={onChange}
                        value={searchValue}
            />

            {todoListGroup}
        </div>
    )
}

export default Dashboard