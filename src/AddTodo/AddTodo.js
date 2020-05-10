import React, {useState} from "react";
import './styles.css'

function AddTodo({addNewTodo,id,nextItemId}) {

    const [title, setTitle] = useState('')

    const createNewTodoItem=(event)=>{
        if (title.length > 0){
            const item = {
                itemId: nextItemId,
                title: title,
                done: false,
                filtered: true
            }

            addNewTodo(id,item)
            setTitle('')
        }

        event.preventDefault();
    }

    return(
        <div className='addNewTodo'>
            <input type='text'
                   placeholder='Add new note.'
                   name='addNewNote'
                   value={title}
                   onChange={(e)=>setTitle(e.target.value)}
            />

            <button name='saveNewNote'
                    onClick={createNewTodoItem}>Save</button>

        </div>
    )
}

export default AddTodo;