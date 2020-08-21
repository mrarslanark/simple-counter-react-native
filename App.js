import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Button } from 'react-native-elements';

export default function App() {

  const [counter, setCounter] = useState(0);
  const [error, setError] = useState(null);

  const increaseCount = () => {
    if (error) {
      setError(null)
    }
    setCounter(counter + 1);
  };

  const decreaseCount = () => {
    if (counter == 0) {
      setError("Negative count not allowed");
      return
    } else {
      setError(null);
    }
    setCounter(counter - 1);
  }

  return (
    <View style={styles.container}>
      <Text h1>{counter}</Text>
      { error
          ? <Text style={styles.error}>{error}</Text>
          : null  }
      <View style={styles.buttonsContainer}>
        <Button
          title="Increase"
          type='clear'
          onPress={increaseCount} />
        <Button
          title="Decrease"
          type='clear'
          onPress={decreaseCount}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    flexDirection: 'row',
    padding: 12,
    width: '100%',
    justifyContent:'space-between'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  error: {
    color: 'red'
  }
});
