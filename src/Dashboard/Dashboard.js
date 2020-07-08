import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout, filterTodoByDone, searchGroupByColor } from "../actions";

import FilterByDate from "../FilterByDate/FilterByDate";
import AddGroup from "../AddGroup/AddGroup";
import TodoGroup from "../TodoGroup/TodoGroup";
import TodoSearch from "../TodoSearch/TodoSearch";
import ColorPanel from "../ColorPanel/ColorPanel";

import TodoFilter from "../TodoFilter/TodoFilter";
import LogoutButton from "../Views/LoginPage/components/LoguoutButton/LogoutButton";
import { fetchGroups } from "../api";

import "./styles.css";

function Dashboard(props) {
   const { requestGroups, logout, groups, searchGroupByColor, filterTodoByDone } = props;

   const [searchValue, setSearchValue] = useState("");

   const onClear = () => setSearchValue("");

   const onChange = (str) => {
      setSearchValue(str);
   };

   useEffect(() => {
      requestGroups();
   }, [requestGroups]);

   return (
      <div className="dashboard">
         <div className="dashboardHeader">
            <div className="dashboardLogoutButton">
               <LogoutButton onSubmit={logout} />
            </div>
            <div className="dashboardTodoSearch">
               <TodoSearch value={searchValue} onChange={onChange} onClear={onClear} />

               <div className="dashboardColorPanel">
                  <ColorPanel setColor={searchGroupByColor} />
               </div>

               <TodoFilter show={filterTodoByDone} />
            </div>
            <div className="dashboardFilterByDateContainer">
               <FilterByDate />
            </div>
         </div>

         <AddGroup nextGroupId={groups.length + 1} />

         <div className="dashboardTodoGroup">
            {groups.map((group) => {
               if (
                  (group.sortByColor === null || group.sortByColor === true) &&
                  (group.sortByCreated === null || group.sortByCreated === true)
               ) {
                  return <TodoGroup key={group.id} {...group} />;
               }
               return null;
            })}
         </div>
      </div>
   );
}

Dashboard.propTypes = {
   groups: PropTypes.array,
   searchGroupByColor: PropTypes.func,
   todoCheckBox: PropTypes.func,
   filterTodoByDone: PropTypes.func,
   logout: PropTypes.func,
   requestGroups: PropTypes.func,
};

const mapStateToProps = (state) => {
   const { groupReducer } = state;
   const { groups } = groupReducer;
   return { groups };
};

const mapDispatchToProps = (dispatch) => ({
   requestGroups: () => dispatch(fetchGroups()),
   searchGroupByColor: (searchColor) => dispatch(searchGroupByColor(searchColor)),
   filterTodoByDone: (completed) => dispatch(filterTodoByDone(completed)),
   logout: () => dispatch(logout()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
