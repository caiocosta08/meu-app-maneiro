import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// screens
import { Login } from "./src/screens/Login";
import { Home } from "./src/screens/Home";
import { Post } from "./src/screens/Post";


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: null }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: null }} />
        <Stack.Screen name="Post" component={Post} options={{ headerTintColor: "#ddd", headerTransparent: true, title: "Notícias" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;