import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import meunome from './componentes/primeirocomponente';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Tiago dos Santos Balestra</Text>
      <meunome />{
      return}
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
