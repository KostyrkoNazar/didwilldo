import React, {useEffect, useState} from "react";
import TodoGroup from "../TodoGroup/TodoGroup";
import TodoSearch from "../TodoSearch/TodoSearch";
import ColorPanel from "../ColorPanel/ColorPanel";
import './styles.css'
import data from "../data/data";
import TodoFilter from "../TodoFilter/TodoFilter";

function Dashboard({data}) {
    const [searchValue, setSearchValue] = useState('')
    const [todoGroupArray, setTodoArray] = useState([])
    const [selectedColor, setSelectedColor]=useState('')
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
                    return {...obj, todoList: searchResult};
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
                    return updatedItem
                } else {
                    // otherwise returning initial item object
                    return item
                }
            })
            // return updated todoList property of group object
            console.log({...group, todoList: sortedListByDone})
            return {...group, todoList: sortedListByDone};
        });

    }
//checking function
    filterByDone(todoGroupArray)


    const setFiltered =(value)=> {
        setIsFiltered(!value)
    }




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



    const setColor=(color)=>{
        setSelectedColor(color)
    }



    return(
        <div className='dashboard'>

            <div className='dashboardHeader'>

                <div className='dashboardTodoSearch'>
                    <TodoSearch onClear={onClear}
                                onChange={onChange}
                                value={searchValue}
                    />
                    <div/>

                    <div className='dashboardColorPanel'>
                        <ColorPanel setColor={setColor}/>
                    </div>
            <TodoFilter isFiltered={isFiltered}
                        setFiltered={setFiltered}
            />

                <TodoSearch onClear={onClear}
                            onChange={onChange}
                            value={searchValue}
                />

                </div>

            </div>

            <div className='dashboardTodoGroup'>
                {todoListGroup}
            </div>


        </div>
    )
}

export default Dashboard