import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Pantuno from './components/Pantuno';
import Pantdos from './components/Pantdos';
import Panttres from './components/Panttres';


type RootStackParamList = {
  Pantuno: undefined;
  Pantdos: undefined;
  Panttres: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Pantuno">
        <Stack.Screen name="Pantuno" component={Pantuno} />
        <Stack.Screen name="Pantdos" component={Pantdos} />
        <Stack.Screen name="Panttres" component={Panttres} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
