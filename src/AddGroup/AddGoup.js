import React, {useState} from "react";

const availableColors = ['yellow', 'red','green','blue','white'];

function AddGroup({addNewGroup,nextGroupId}) {

    const [color, setColor] = useState('')
    const [title, setTitle] = useState('')
   // const [createdDate, setCreatedDate] = useState(Date)
    const [isClicked, setIsClicked] = useState(false)

    const chooseColor =(randomColor)=> {
        if (isClicked === true) {
            availableColors.find
        }
    }


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
            setColor('')
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

            <input type = 'color'
                   name = 'colorPicker'
                   value = {color}
                   onChange = {(e)=> {
                        if (isClicked===true) {
                               setColor(e.target.value)
                            //setIsClicked(false)
                        } else {
                            const randomColor = availableColors[Math.floor(Math.random() * availableColors.length)]
                           console.log(randomColor)
                            setColor(randomColor)
                        }
                            }
                   }
            />

            <button name='submitNewGroup'
                    onClick={createNewGroup}>Create</button>

        </div>
    )
}

export default AddGroup