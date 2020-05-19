import React, { useState } from "react";
import PropTypes from "prop-types";
import { addNewTodo } from "../actions";

import "./styles.css";
import connect from "react-redux/lib/connect/connect";

function AddTodo({ id, nextItemId }, props) {
   const [title, setTitle] = useState("");

   const createNewTodoItem = (event) => {
      if (title.length > 0) {
         const item = {
            itemId: nextItemId,
            title: title,
            done: false,
            filtered: true,
         };

         props.addNewTodo(id, item);
         setTitle("");
      }

      event.preventDefault();
   };

   return (
      <div className="addNewTodo">
         <input
            type="text"
            placeholder="Add new note."
            name="addNewNote"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
         />

         <button name="saveNewNote" onClick={createNewTodoItem}>
            Save
         </button>
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      title: state.title,
      itemId: state.itemId,
      done: false,
      filtered: true,
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      addNewTodo: dispatch(addNewTodo()),
   };
};

AddTodo.propTypes = {
   addNewTodo: PropTypes.func,
   id: PropTypes.number,
   nextItemId: PropTypes.number,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
