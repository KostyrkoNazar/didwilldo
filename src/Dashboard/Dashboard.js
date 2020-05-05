import React, {useEffect, useState} from "react";
import TodoGroup from "../TodoGroup/TodoGroup";
import TodoSearch from "../TodoSearch/TodoSearch";
import './styles.css'

function Dashboard({data}) {
    const [searchValue, setSearchValue] = useState('')
    const [todoGroupArray, setTodoArray] = useState([])
    const [isSorted, setIsSorted] = useState([])

    const onClear = () => setSearchValue('');

    const onChange = (str) => {
        setSearchValue(str)
    }



    const searchTodosByTitle = (todosList, searchTitle) => {

        return todosList.map(todos => {

            const {title}=todos;

            if (title.startsWith(searchTitle)){
                return todos
            }

        }).filter(item=>item!==undefined)
    }



    const search = (searchTitle, groupList) => {

        return groupList.map(obj => {

                const {todoList} = obj;

                const searchResult = searchTodosByTitle(todoList, searchTitle);

                if (searchResult.length !== 0) {
                    const updatedGroup = {...obj, todoList: searchResult};
                    return updatedGroup;
                }

        }).filter(groups => groups !== undefined)
    }



    useEffect(()=>{

        if (searchValue.length === 0) {
            setTodoArray(data);
        } else {
            const searchResult= search(searchValue, data);
                setTodoArray(searchResult);
        }
        },[searchValue])



    const addNewTodo = (id, newTodo) => {

        const updatedGroupArray = [...todoGroupArray];

        const index = updatedGroupArray.findIndex((group) => group.id === id);

        updatedGroupArray[index].todoList.push(newTodo);

        setTodoArray(updatedGroupArray);
    };



    const todoListGroup = todoGroupArray.map((obj)=>
        <TodoGroup key={obj.id}
                   color={obj.color}
                   title={obj.title}
                   created={obj.created}
                   todoList={obj.todoList}
                   addTodo={addNewTodo}
                   id={obj.id}
        />)



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