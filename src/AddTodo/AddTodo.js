import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "./styles.css";

function AddTodo(props) {
   const { id, nextItemId, apiPostTodo } = props;

   const [title, setTitle] = useState("");

   const createNewTodoItem = (event) => {
      if (title.length > 0) {
         const item = {
            sortByTitle: null,
            sortByDone: null,
            id: nextItemId,
            title: title,
            done: false,
         };

         apiPostTodo(id, item);
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

AddTodo.propTypes = {
   id: PropTypes.number,
   nextItemId: PropTypes.number,
   apiPostTodo: PropTypes.func,
};

const mapStateToProps = (state) => {
   return state;
};

export default connect(mapStateToProps)(AddTodo);
