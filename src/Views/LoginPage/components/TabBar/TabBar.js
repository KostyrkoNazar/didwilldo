import React from "react";
import TabBarButton from "./Components/TapBarButton";
import PropTypes from "prop-types";

const initSchema = [
   {
      id: "register",
      label: "New Account",
   },
   {
      id: "login",
      label: "Log in",
   },
];

function TabBar(props) {
   return (
      <div>
         {initSchema.map(({ id, label }, index) => {
            return (
               <TabBarButton
                  key={index.toString()}
                  isSelected={props.tabBarButtonId === id}
                  onClick={() => {
                     if (props.tabBarButtonId !== id) {
                        props.setTabBarButtonId(id);
                     }
                  }}
                  id={id}
                  label={label}
               />
            );
         })}
      </div>
   );
}

TabBar.propTypes = {
   tabBarButtonId: PropTypes.string,
   setTabBarButtonId: PropTypes.func,
};

export default TabBar;
