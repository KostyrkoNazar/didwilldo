import React, {useState} from "react";

function AddTodo({addNewTodo,id}) {

    const [title, setTitle] = useState('')

    const createNewTodoItem=(event)=>{
        if (title.length > 0){
            const item = {
                title: title,
                done: false,
                filtered: true
            }
            addNewTodo(id,item)
        }
        event.preventDefault();
    }

    return(
        <div>
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