/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {RootStackParam} from '$models/Navigator';
import Login from '$screens/Login';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import React from 'react';
import BlogPage from '../screens/Blog';
import Home from '../screens/Home';

const Stack = createStackNavigator<RootStackParam>();
const RootNavigation = () => {
  const NoneHeaderOption: StackNavigationOptions = {
    headerShown: false,
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={Login}
          name="Login"
          options={NoneHeaderOption}
        />
        <Stack.Screen component={Home} name="Home" options={NoneHeaderOption} />
        <Stack.Screen component={BlogPage} name="Blog" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
