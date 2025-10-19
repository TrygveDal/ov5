import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home';
import RestaurantsScreen from './screens/Restaurants'
import ArticleScreen from './screens/Article'

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home"
          component={HomeScreen}
          />
        <Stack.Screen
          name="Restaurants"
          component={RestaurantsScreen}
          />
        <Stack.Screen
          name="Article"
          component={ArticleScreen}
          />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

export default App;