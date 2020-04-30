import React, {useEffect, useState} from "react";
import TodoGroup from "../TodoGroup/TodoGroup";
import TodoSearch from "../TodoSearch/TodoSearch";
import ColorPanel from "../ColorPanel/ColorPanel";
import './styles.css'
import data from "../data/data";

const availableColors = ['yellow', 'red','green','blue'];

function Dashboard() {
    const [searchValue, setSearchValue] = useState('')
    const [todoGroupArray, setTodoArray] = useState([])
    const [isSorted, setIsSorted] = useState([])
    const [isColor, setIsColor]=useState('')

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

    const onSetColor=(value)=>{
        setIsColor(value)
    }


    return(
        <div className='dashboard'>

            <div className='dashboardTodoSearch'>
                <TodoSearch onClear={onClear}
                            onChange={onChange}
                            value={searchValue}
                />

                <div className='dashboardControlPanel'>
                    {availableColors.map((color,index)=>
                        <ColorPanel key={index}
                                    color={color}
                                    setColor={onSetColor}/>
                    )}

                </div>

            </div>

            <div className='dashboardTodoGroup'>
                {todoListGroup}
            </div>

        </div>
    )
}

export default Dashboard