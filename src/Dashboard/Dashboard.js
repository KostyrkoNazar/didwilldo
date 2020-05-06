import React, {useEffect, useState} from "react";
import TodoGroup from "../TodoGroup/TodoGroup";
import TodoSearch from "../TodoSearch/TodoSearch";
import ColorPanel from "../ColorPanel/ColorPanel";
import './styles.css'
import data from "../data/data";

function Dashboard() {
    const [searchValue, setSearchValue] = useState('')
    const [todoGroupArray, setTodoArray] = useState([])
    const [isSorted, setIsSorted] = useState([])
    const [selectedColor, setSelectedColor]=useState('')

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


    const todoListGroup = todoGroupArray.map((obj, objIndex)=>
        <TodoGroup key={objIndex}
                   color={obj.color}
                   title={obj.title}
                   created={obj.created}
                   todoList={obj.todoList}/>)

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
                </div>

            </div>

            <div className='dashboardTodoGroup'>
                {todoListGroup}
            </div>

        </div>
    )
}

export default Dashboard