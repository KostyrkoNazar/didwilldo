import React, {useEffect, useState} from "react";
import TodoGroup from "../TodoGroup/TodoGroup";
import TodoSearch from "../TodoSearch/TodoSearch";
import './styles.css'

function Dashboard({data}) {
    const [searchValue, setSearchValue] = useState('')
    const [todoGroupArray, setTodoArray] = useState([])

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
                    return {...obj, todoList: searchResult};
                }

        }).filter(groups => groups !== undefined)
    }



    useEffect(()=>{

        if (searchValue.length === 0) {
            setTodoArray(data);
            //console.log(data)
        } else {
            const searchResult= search(searchValue, data);
           // console.log(searchResult)
                setTodoArray(searchResult);
        }
        },[searchValue])



    const addNewTodo = (id, newTodo) => {

        const updatedGroupArray = [...todoGroupArray];

        const index = updatedGroupArray.findIndex((group) => group.id === id);

        updatedGroupArray[index].todoList.push(newTodo);

        setTodoArray(updatedGroupArray);
    }


    const handleCheckbox=( id)=> {

        const updatedItemDoneProperty = todoGroupArray.map( groups => {
            const {todoList} = groups;

            const newTodoList = todoList.map(todo => {
                if (todo.itemId === id) {
                    todo.done = !todo.done
                }
                console.log(todo)
                return todo
            })

            return [...todoList, ...newTodoList]
        })

        return {...todoGroupArray, ...updatedItemDoneProperty}
    }


    const todoListGroup = todoGroupArray.map((obj,index)=>
        <TodoGroup key={index+obj.id}
                   color={obj.color}
                   title={obj.title}
                   created={obj.created}
                   todoList={obj.todoList}
                   addTodo={addNewTodo}
                   id={obj.id}
                   handleCheckbox={handleCheckbox}
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