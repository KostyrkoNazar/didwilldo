import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "./styles.css";
import { postTodo } from "../api";

function AddTodo(props) {
   const { id, addNewTodo, nextItemId } = props;

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
         addNewTodo(id, item);
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
   addNewTodo: PropTypes.func,
   id: PropTypes.number,
   nextItemId: PropTypes.number,
};

const mapStateToProps = (state) => {
   return state;
};

const mapDispatchToProps = (dispatch) => ({
   addNewTodo: (id, newTodo) => dispatch(postTodo(id, newTodo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
