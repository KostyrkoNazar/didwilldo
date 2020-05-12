import React, {useState} from "react";
import ColorPanel from "../ColorPanel/ColorPanel";

const availableColors = ['yellow', 'red','green','blue','white'];

function AddGroup({addNewGroup,nextGroupId}) {

    const [color, setColor] = useState('white')
    const [title, setTitle] = useState('')
   // const [createdDate, setCreatedDate] = useState(Date)

    const randomColor = availableColors[Math.floor(Math.random() * availableColors.length)]
    console.log(randomColor)


    const createNewGroup =(e)=> {
        if (title.length > 0 ) {

            const newGroup = {
                id: nextGroupId,
                color: color,
                title: title,
                created: " ",
                todoList:[]
            }

            addNewGroup(newGroup)
            // setColor('white')
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
            <ColorPanel/>

            <button name='submitNewGroup'
                    onClick={createNewGroup}>Create</button>

        </div>
    )
}

export default AddGroup