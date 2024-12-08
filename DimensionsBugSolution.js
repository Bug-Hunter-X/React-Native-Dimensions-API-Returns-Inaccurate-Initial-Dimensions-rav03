The `useEffect` hook and the `Dimensions` API will be used in React Native to solve this. The hook allows us to execute a side-effect function after the component renders.  The `Dimensions` API provides the screen dimensions.  We use `useEffect` to get the dimensions after the initial render. By setting the dimensions state, the component re-renders with the correct information.  The addition of a loading indicator provides visual feedback for the user.

```javascript
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const MyComponent = () => {
  const [screenDimensions, setScreenDimensions] = useState({
    width: width,
    height: height
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window, screen }) => {
      setScreenDimensions({
        width: window.width,
        height: window.height,
      });
      setIsLoading(false);
    });

    return () => subscription?.remove(); //Clean up the event listener
  }, []);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Screen Width: {screenDimensions.width}</Text>
      <Text>Screen Height: {screenDimensions.height}</Text>
      <View style={{ width: screenDimensions.width / 2, height: 50, backgroundColor: 'red' }}/>
    </View>
  );
};

export default MyComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```