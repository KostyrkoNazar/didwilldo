import React, {useEffect, useState} from "react";
import TodoGroup from "../TodoGroup/TodoGroup";
import TodoSearch from "../TodoSearch/TodoSearch";
import './styles.css'
import data from "../data/data";
import TodoFilter from "../TodoFilter/TodoFilter";

function Dashboard() {
    const [searchValue, setSearchValue] = useState('')
    const [todoGroupArray, setTodoArray] = useState([])
    const [isFiltered, setIsFiltered] = useState(false)

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

            if (searchValue.length === 0 ) {
                setTodoArray(data);
            } else {
                const searchResult = search(searchValue, data);
                setTodoArray(searchResult);

            }
        },[searchValue, isFiltered])


     const filterByDone=(groupListArray)=>{
        //returning same shape array
        return groupListArray.map(group => {
            const {todoList} = group;

            // sortedListByDone is an updated todoList
           const sortedListByDone = todoList.map(item => {
                const {done} = item;

                if (done === false) {
                    //changing filtered property of each item object
                    const updatedItem = {...item, filtered:false}
                    //returning updated item object
                    console.log(updatedItem)
                    return updatedItem
                } else {
                    // otherwise returning initial item object
                    return item
                }
            })
            // return updated todoList property of group object
            return {...group, todoList: sortedListByDone};
        });

    }

    filterByDone(todoGroupArray)


    const setFiltered =(value)=> {
        setIsFiltered(!value)
    }



    const todoListGroup = todoGroupArray.map((obj, objIndex)=>
        <TodoGroup key={objIndex}
                   color={obj.color}
                   title={obj.title}
                   created={obj.created}
                   todoList={obj.todoList}/>)


    return(
        <div className='dashboard'>

            <TodoFilter isFiltered={isFiltered}
                        setFiltered={setFiltered}
            />

                <TodoSearch onClear={onClear}
                            onChange={onChange}
                            value={searchValue}
                />

                {todoListGroup}
        </div>
    )
}

export default Dashboard