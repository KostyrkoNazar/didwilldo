import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { searchGroupByColor } from "../actions";
import { todoCheckBox } from "../actions";
import { filterTodoByDone } from "../actions";

import AddGroup from "../AddGroup/AddGoup";
import TodoGroup from "../TodoGroup/TodoGroup";
/*import TodoSearch from "../TodoSearch/TodoSearch";*/
import ColorPanel from "../ColorPanel/ColorPanel";

import TodoFilter from "../TodoFilter/TodoFilter";

import "./styles.css";

function Dashboard(props) {
   const { groupList, searchGroupByColor, todoCheckBox, filterTodoByDone } = props;

   /*useEffect(() => {
      if (searchValue.length === 0) {
         setTodoArray(data);
      } else {
         const search = (searchTitle, groupList) => {
            return groupList
               .map((obj) => {
                  const { todoList } = obj;

                  const searchResult = searchTodosByTitle(todoList, searchTitle);

                  if (searchResult.length !== 0) {
                     return { ...obj, todoList: searchResult };
                  } else {
                     return undefined;
                  }
               })
               .filter((groups) => groups !== undefined);
         };

         const searchResult = search(searchValue, data);

         setTodoArray(searchResult);
      }
   }, [searchValue, data]);

   const onClear = () => setSearchValue("");

   const onChange = (str) => {
      setSearchValue(str);
   };

   const searchTodosByTitle = (todosList, searchTitle) => {
      return todosList
         .map((todos) => {
            const { title } = todos;

            if (title.startsWith(searchTitle)) {
               return todos;
            } else {
               return undefined;
            }
         })
         .filter((item) => item !== undefined);
   };
*/

   return (
      <div className="dashboard">
         <div className="dashboardHeader">
            <div className="dashboardTodoSearch">
               {/*
               <TodoSearch onClear={onClear} onChange={onChange} value={searchValue} />
*/}

               <div className="dashboardColorPanel">
                  <ColorPanel setColor={searchGroupByColor} />
               </div>

               <TodoFilter show={filterTodoByDone} />
            </div>
         </div>

         <AddGroup />

         <div className="dashboardTodoGroup">
            {groupList.map((groups, index) => (
               <TodoGroup
                  key={index + " " + groups.id}
                  color={groups.color}
                  title={groups.title}
                  created={groups.created}
                  id={groups.id}
                  todoItems={groups.todoList}
                  nextItemId={groups.todoList.length}
                  todoCheckBox={todoCheckBox}
               />
            ))}
         </div>
      </div>
   );
}

Dashboard.propTypes = {
   groupList: PropTypes.array,
   searchGroupByColor: PropTypes.func,
   todoCheckBox: PropTypes.func,
   filterTodoByDone: PropTypes.func,
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
