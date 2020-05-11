import React, {useEffect, useState} from "react";
import TodoGroup from "../TodoGroup/TodoGroup";
import TodoSearch from "../TodoSearch/TodoSearch";
import ColorPanel from "../ColorPanel/ColorPanel";
import './styles.css'
import TodoFilter from "../TodoFilter/TodoFilter";
import AddGroup from "../AddGroup/AddGoup";

function Dashboard({data}) {
    const [searchValue, setSearchValue] = useState('')
    const [todoGroupArray, setTodoArray] = useState([])
    const [selectedColor, setSelectedColor]=useState('')
    const [isFiltered, setIsFiltered] = useState(false)
    const [group, setGroup] = useState([])

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

        return groupListArray.map(group => {
            const {todoList} = group;

           const sortedListByDone = todoList.map(item => {
                const {done} = item;

                if (done === false) {
                    return {...item, filtered: false}
                } else {
                    return item
                }
            })
            return {...group, todoList: sortedListByDone};
        });

    }


    const setFiltered =(value)=> {
        setIsFiltered(!value)
    }


    const addNewTodo = (id, newTodo) => {

        const updatedGroupArray = [...todoGroupArray];

        const index = updatedGroupArray.findIndex((group) => group.id === id);

        updatedGroupArray[index].todoList.push(newTodo);

        setTodoArray(updatedGroupArray);
    }


    const handleCheckbox=(groupId,todoId,done) => {

        const updatedGroupArray = [...todoGroupArray]

        const groupIndex = updatedGroupArray.findIndex((value)=> value.id === groupId)
        const {todoList} = updatedGroupArray[groupIndex];

         const todoIndex = todoList.findIndex((todo)=>todo.itemId === todoId )

        updatedGroupArray[groupIndex].todoList[todoIndex].done = done

        setTodoArray(updatedGroupArray)
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

    const addNewGroup =(newGroup)=> {
        setGroup(newGroup)
    }


    return(
        <div className='dashboard'>

            <div className = 'addGroup'>
                <AddGroup addNewGroup={addNewGroup}/>
            </div>

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

                </div>

            </div>

            <div className='dashboardTodoGroup'>
                {todoListGroup}
            </div>


        </div>
    )
}

export default Dashboard