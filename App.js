import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { callTone } from './util/soundHelper.js';
import Logo from './components/Logo.js';

export default function App() {
  // callTone(1,3,59,20,"AM");
  return (
    <View style={styles.container}>
      <Logo/>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
