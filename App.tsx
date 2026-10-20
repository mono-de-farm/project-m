import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export const Counter = () => {
  const [count, setCount] = useState(10);

  const increaseBy = (value: number) => {
    setCount(count + value);
  };

  return (
    <View style={styles.counterContainer}>
      <Text style={styles.counterText}>
        Contador: <Text style={styles.counterBold}>{count}</Text>
      </Text>

      <View style={styles.buttonRow}>
        <Pressable style={styles.button} onPress={() => increaseBy(1)}>
          <Text style={styles.buttonText}>+1</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={() => increaseBy(-1)}>
          <Text style={styles.buttonText}>-1</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>¡Hola mundo!</Text>
      
      
      <Counter />
    </View>
  );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: '#6b21a8', // Este es el color morado
  alignItems: 'center',
  justifyContent: 'center',
},
  titulo: {
    fontSize: 32,
    color: '#4682b4',
    fontWeight: 'bold',
    fontStyle: 'italic',
    letterSpacing: 2,
    marginBottom: 20, 
  },
  counterContainer: {
    alignItems: 'center',
  },
  counterText: {
    fontSize: 24,
    color: '#ffffff',
    marginBottom: 16,
  },
  counterBold: {
    fontWeight: 'bold',
    color: '#3b82f6',
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 12,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: '#3b82f6',
    borderRadius: 8,
    minWidth: 50,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

