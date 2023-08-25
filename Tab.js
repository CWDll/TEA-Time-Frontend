import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Calendar, DiaryList, Chart, Settings} from '../screens/Tabscreens';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

const TabIcon = ({name, size, color}) => {
    return <MaterialCommunityIcons name = {name} size = {size} color = {color} />;
};

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
            <Tab.Navigator
            screenOptions = {({route}) => ({tabBarStyle : {backgroundColor : '#F4E8D1'},})}>

               <Tab.Screen name = "Calendar"
               //static navigationOptions = {{tabBarIcon : props => TabIcon({...props, name : 'calendar'}), }}
               component = {Calendar} 
               options = {{headerStyle : {backgroundColor : '#F4E8D1'}, fontWeight : "bold",
               tabBarIcon : props => TabIcon({...props, name : 'calendar'}), }}/>

               <Tab.Screen name = "DiaryList" 
               component = {DiaryList} 
               options = {{headerStyle : {backgroundColor : '#F4E8D1'},fontWeight : "bold",
               tabBarIcon : props => TabIcon({...props, name : 'file-document-outline'}), }}/>

               <Tab.Screen name = "Chart" 
               component = {Chart} 
               options = {{headerStyle : {backgroundColor : '#F4E8D1'},fontWeight : "bold",
               tabBarIcon : props => TabIcon({...props, name : 'chart-bar'}), }}/>

               <Tab.Screen name = "Settings" 
               component = {Settings} 
               options = {{headerStyle : {backgroundColor : '#F4E8D1'},fontWeight : "bold",
               tabBarIcon : props => TabIcon({...props, name : 'account-cog'}), }}/>
        </Tab.Navigator>
    );
};

export default TabNavigation;