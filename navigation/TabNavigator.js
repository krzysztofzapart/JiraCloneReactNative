import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import AddTask from "../screens/AddTaskScreen";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import MyTasks from "../screens/MyTasksScreen";
import Profile from "../screens/ProfileScreen";
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    const screenOptions = {
        headerShown: false,
        showIcon: true,
        activeTintColor: '#FFFF',
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
        <Tab.Screen name="My Tasks" component={MyTasks} options={{tabBarIcon: ({size, color}) => (<Icon name={"list"} color={color} size={size} />)}}/>
        <Tab.Screen name="Add Task" component={AddTask} options={{tabBarIcon: ({size, color}) => (<Icon name={"plus"} color={color} size={size} />)}}/>
        <Tab.Screen name="My Profile" component={Profile} options={{tabBarIcon: ({size, color}) => (<Icon name={"user"} color={color} size={size} />)}}/>
    </Tab.Navigator>
    );

}
export default TabNavigator;