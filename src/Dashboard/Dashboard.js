import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { searchGroupByColor } from "../actions";
import { todoCheckBox } from "../actions";
import { filterTodoByDone } from "../actions";

import FilterByDate from "../FilterByDate/FilterByDate";
import AddGroup from "../AddGroup/AddGoup";
import TodoGroup from "../TodoGroup/TodoGroup";
import TodoSearch from "../TodoSearch/TodoSearch";
import ColorPanel from "../ColorPanel/ColorPanel";

import TodoFilter from "../TodoFilter/TodoFilter";
import LogoutButton from "../Views/LoginPage/components/LoguoutButton/LogoutButton";

import "./styles.css";

function Dashboard(props) {
   const { logoutUser, groupList, searchGroupByColor, todoCheckBox, filterTodoByDone } = props;

   const [searchValue, setSearchValue] = useState("");

   const onClear = () => setSearchValue("");

   const onChange = (str) => {
      setSearchValue(str);
   };

   return (
      <div className="dashboard">
         <div className="dashboardHeader">
            <div className="dashboardLougoutButton">
               <LogoutButton onSubmit={logoutUser} />
            </div>
            <div className="dashboardTodoSearch">
               <TodoSearch value={searchValue} onChange={onChange} onClear={onClear} />

               <div className="dashboardColorPanel">
                  <ColorPanel setColor={searchGroupByColor} />
               </div>

               <TodoFilter show={filterTodoByDone} />
            </div>
            <div>
               <FilterByDate />
            </div>
         </div>

         <AddGroup nextGroupId={groupList.length + 1} />

         <div className="dashboardTodoGroup">
            {groupList.map((group, index) => {
               if (
                  (group.sortByColor === null || group.sortByColor === true) &&
                  (group.sortByCreated === null || group.sortByCreated === true)
               ) {
                  return (
                     <TodoGroup
                        key={index + " " + group.id}
                        {...group}
                        todoItems={group.todoList}
                        nextItemId={group.todoList.length}
                        todoCheckBox={todoCheckBox}
                     />
                  );
               }
            })}
         </div>
      </div>
   );
}

Dashboard.propTypes = {
   groupList: PropTypes.array,
   searchGroupByColor: PropTypes.func,
   todoCheckBox: PropTypes.func,
   filterTodoByDone: PropTypes.func,
   logoutUser: PropTypes.func,
};

const mapStateToProps = (state) => {
   return state;
};

const mapDispatchToProps = (dispatch) => ({
   searchGroupByColor: (searchColor) => dispatch(searchGroupByColor(searchColor)),
   todoCheckBox: (groupId, todoId, done) => dispatch(todoCheckBox(groupId, todoId, done)),
   filterTodoByDone: (completed) => dispatch(filterTodoByDone(completed)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
