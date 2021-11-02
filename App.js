

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductUI from './src/productUI'
import ProductList from './src/productList'


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="productUI" component={ProductUI} />
        <Stack.Screen name="productList" component={ProductList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
 