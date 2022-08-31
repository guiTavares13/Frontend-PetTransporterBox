import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import global from './global';

import Initial from './src/screens/Initial';

export default function App() {
  return (
    
    <Initial></Initial>

  /*<View style={global.container}>
      <Text>Hello World!</Text>
      <StatusBar style="auto" />
    </View>*/
  );
}

