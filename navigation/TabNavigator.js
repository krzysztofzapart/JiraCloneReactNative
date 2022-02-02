import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import MyTasks from "../screens/MyTasksScreen";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    const screenOptions = {
        headerShown: false,
        tabBarStyle:{
          backgroundColor:'#212529',
        },
        tabBarItemStyle:{
          backgroundColor:'#212529',
          activeColor: "black",
        }
      };
      const sceneContainerStyle = {
        backgroundColor: '#212529',
      };
    return(
    <Tab.Navigator {...{screenOptions, sceneContainerStyle}}>
        <Tab.Screen name="My Tasks" component={MyTasks} />
    </Tab.Navigator>
    );

}
export default TabNavigator;