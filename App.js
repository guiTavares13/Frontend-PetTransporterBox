import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

import global from './global';

import Initial from './src/screens/Initial';

export default function App() {
  return (
    <SafeAreaView style={global.container}>
      <Initial></Initial>
    </SafeAreaView>
    

  /*<View style={global.container}>
      <Text>Hello World!</Text>
      <StatusBar style="auto" />
    </View>*/
  );
}

