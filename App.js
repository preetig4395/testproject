import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import SignIn from './components/signin';
import Chat from './components/chat';
import {store} from './redux/store';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator headerMode={false}>
          <Stack.Screen name="Home" component={SignIn} />
          <Stack.Screen name="chat" component={Chat} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
