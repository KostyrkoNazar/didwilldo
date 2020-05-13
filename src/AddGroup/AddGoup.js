import React, {useState} from "react";
import ColorPanel from "../ColorPanel/ColorPanel";
import {COLOR_LIST} from "../appConfig";

function AddGroup({addNewGroup,nextGroupId}) {

    const [color, setColor] = useState('white')
    const [title, setTitle] = useState('')
   // const [createdDate, setCreatedDate] = useState(Date)

    const randomColor = COLOR_LIST[Math.floor(Math.random() * COLOR_LIST.length)]


    const createNewGroup =(e)=> {
        if (title.length > 0 ) {

            const newGroup = {
                id: nextGroupId,
                color: color === 'white' ? randomColor : color,
                title: title,
                created: " ",
                todoList:[]
            }

            addNewGroup(newGroup)
             setColor('white')
            setTitle('')
        }

        e.preventDefault();
    }

    return(
        <div>
            <input type = 'text'
                   name = 'groupTitle'
                   value = {title}
                   onChange = {(e)=>setTitle(e.target.value)}
            />
            <ColorPanel setColor={setColor}/>

            <button name='submitNewGroup'
                    onClick={createNewGroup}>Create</button>

        </div>
    )
}

export default AddGroup