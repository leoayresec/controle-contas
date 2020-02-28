import React from 'react'
import Home from '../pages/Home'
import {
  createAppContainer,
  createStackNavigator
} from 'react-navigation';
import {  createMaterialTopTabNavigator,
} from 'react-navigation-tabs'
const TabNavigator = createMaterialTopTabNavigator(
    {
      Home: Home,
    }
    )

export default createAppContainer(TabNavigator)
