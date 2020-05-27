import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
/*import TodoItem from "../TodoItem/TodoItem";*/

import "./styles.css";
import AddTodo from "../AddTodo/AddTodo";

function TodoGroup(props) {
   const { color, created, title, id } = props;
   /*console.log(groupList);*/
   /* const todoItems = groupList.map((item, index) => {
      if (item["filtered"] && item.filtered !== false) {
         return (
            <TodoItem
               key={index}
               title={item.title}
               done={item.done}
               itemId={item.itemId}
               /!* handleTodoCheckbox={(todoId, done) => {
                  handleCheckbox(id, todoId, done);
               }}*!/
            />
         );
      }

      return null;
   });*/

   return (
      <div className="todoGroup">
         <div className="titleDateContainer" style={{ borderTopColor: color }}>
            <label className="groupTitle">{title}</label>
            <label className="groupDate">{created}</label>
         </div>

         {/*  <div className="itemsContainer">{todoItems}</div>*/}

         <AddTodo id={id} />
      </div>
   );
}

TodoGroup.propTypes = {
   color: PropTypes.string,
   created: PropTypes.string,
   title: PropTypes.string,
   id: PropTypes.number,
   /* handleCheckbox: PropTypes.func,*/
};

const mapStateToProps = (state) => {
   //console.log(state);
   return state;
};

export default connect(mapStateToProps)(TodoGroup);
