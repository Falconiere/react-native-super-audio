import * as React from 'react';

import { StyleSheet, View, Text, Button } from 'react-native';
import { multiply } from 'react-native-super-audio';

export default function App() {
  const [result, setResult] = React.useState<number>(1);

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <Button
        title="Multiply"
        onPress={() => {
          multiply(result, 2).then(setResult);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
