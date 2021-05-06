import React, {useEffect, useState,useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { MainTabNavigator } from './MainTabNavigator';
import {AuthScreen} from "../screens/AuthScreen";
import {UserContext} from "../contexts/userContext";


export const AppNavigator =() =>{
    const {user} = useContext(UserContext);
    return(
        <NavigationContainer>
            {!user ? <AuthScreen/>:<MainTabNavigator/> }
    </NavigationContainer>

    );
}
