import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import AddGroup from "../AddGroup/AddGoup";
import TodoGroup from "../TodoGroup/TodoGroup";
import TodoSearch from "../TodoSearch/TodoSearch";
import ColorPanel from "../ColorPanel/ColorPanel";

import TodoFilter from "../TodoFilter/TodoFilter";

import "./styles.css";

function Dashboard({ data }) {
   const [searchValue, setSearchValue] = useState("");
   const [todoGroupArray, setTodoArray] = useState([]);
   const [isFiltered, setIsFiltered] = useState(false);

   useEffect(() => {
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
   }, [searchValue, isFiltered, data]);

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

   // eslint-disable-next-line no-unused-vars
   const filterByDone = (groupListArray) => {
      return groupListArray.map((group) => {
         const { todoList } = group;

         const sortedListByDone = todoList.map((item) => {
            const { done } = item;

            if (done === false) {
               return { ...item, filtered: false };
            } else {
               return item;
            }
         });
         return { ...group, todoList: sortedListByDone };
      });
   };

   const setFiltered = (value) => {
      setIsFiltered(!value);
   };

   const addNewTodo = (id, newTodo) => {
      const updatedGroupArray = [...todoGroupArray];

      const index = updatedGroupArray.findIndex((group) => group.id === id);

      updatedGroupArray[index].todoList.push(newTodo);

      setTodoArray(updatedGroupArray);
   };

   const handleCheckbox = (groupId, todoId, done) => {
      const updatedGroupArray = [...todoGroupArray];

      const groupIndex = updatedGroupArray.findIndex((value) => value.id === groupId);
      const { todoList } = updatedGroupArray[groupIndex];

      const todoIndex = todoList.findIndex((todo) => todo.itemId === todoId);

      updatedGroupArray[groupIndex].todoList[todoIndex].done = done;

      setTodoArray(updatedGroupArray);
   };

   const todoListGroup = todoGroupArray.map((obj, index) => (
      <TodoGroup
         key={index + obj.id}
         color={obj.color}
         title={obj.title}
         created={obj.created}
         todoList={obj.todoList}
         addTodo={addNewTodo}
         id={obj.id}
         handleCheckbox={handleCheckbox}
      />
   ));

   const searchGroupByColor = (searchColor, groupList) => {
      return groupList
         .map((group) => {
            const { color } = group;

            if (searchColor === color) {
               return { ...group, color: searchColor };
            } else {
               return undefined;
            }
         })
         .filter((groups) => groups !== undefined);
   };

   const setColor = (color) => {
      if (color !== "white") {
         const updatedGroup = searchGroupByColor(color, data);
         setTodoArray(updatedGroup);
      } else {
         setTodoArray(data);
      }
   };

   const addNewGroup = (newGroup) => {
      const updatedGroupArray = [...todoGroupArray];
      setTodoArray([...updatedGroupArray, newGroup]);
   };

   return (
      <div className="dashboard">
         <div className="dashboardHeader">
            <div className="dashboardTodoSearch">
               <TodoSearch onClear={onClear} onChange={onChange} value={searchValue} />

               <div className="dashboardColorPanel">
                  <ColorPanel setColor={setColor} />
               </div>

               <TodoFilter isFiltered={isFiltered} setFiltered={setFiltered} />
            </div>
         </div>

         <AddGroup addNewGroup={addNewGroup} nextGroupId={todoGroupArray.length + 1} />

         <div className="dashboardTodoGroup">{todoListGroup}</div>
      </div>
   );
}

Dashboard.propTypes = {
   data: PropTypes.object,
};

export default Dashboard;
