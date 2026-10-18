import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Aplicamos la propiedad style al componente Text */}
      <Text style={styles.texto}>¡Hola mundo!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e2e', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 32,              
    color: '#4682b4',           
    fontWeight: 'bold',       
    fontStyle: 'italic',        
    letterSpacing: 2,         
    textAlign: 'center',        
  },
});