import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.whiteBig}>Welcome to Toodler!</Text>
      <Text style={styles.whiteMed}>Only for cool people</Text>
      <Text style={styles.whiteMed}>Only for cool people</Text>
      <Text style={styles.whiteMed}>Only for cool people</Text>
      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#284B63',
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteBig: {
    color: '#CCCCCC',
    fontSize: 30
  },
  whiteMed: {
    color: '#FFFFFF',
    fontSize: 16
  }
});
