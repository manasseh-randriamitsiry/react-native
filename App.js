import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import EtudiantScreen from './screen/EtudiantScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <EtudiantScreen/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   margin:10,
   marginTop:50,
  },
});