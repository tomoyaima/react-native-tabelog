import React, {useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { MainTabNavigator } from './MainTabNavigator'
import {AuthScreen} from "../screens/AuthScreen"
export const AppNavigator =() =>{
    const user= {id:123};
    return(
        <NavigationContainer>
            {!user ? <AuthScreen/>:<MainTabNavigator/> }
    </NavigationContainer>

    );
}
