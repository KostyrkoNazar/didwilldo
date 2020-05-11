import React, {useState} from "react";

function AddGroup({addNewGroup}) {

    const [color, setColor] = useState('#ff0000')
    const [title, setTitle] = useState('')
    const [createdDate, setCreatedDate] = useState(Date)


    const createNewGroup =(e)=> {
        if (title.length > 0 && color.length > 0) {

            const newGroup = {
                id: 1,
                color: color,
                title: title,
                created: " ",
                todoList:[]
            }

            addNewGroup(title, color)

            setTitle('')
            setColor('#ff0000')
        }

        e.preventDefault();
    }

    return(
        <div>
            <input type = 'text'
                   name = 'groupTitle'
                   value = {title}
                   onChange = {()=>console.log('new Group title')}
            />

            <input type = 'color'
                   name = 'colorPicker'
                   value = {color}
                   onChange = {()=>console.log(('pick new color'))}
            />

            <input type = 'Create'
                   name = 'creatGroup'
                   onClick = {()=>createNewGroup}
            />
        </div>
    )
}

export default AddGroup