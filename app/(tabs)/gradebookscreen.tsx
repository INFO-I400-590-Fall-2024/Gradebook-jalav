import { useContext } from 'react';
import { GradebookContext } from '@/components/GradebookContext';
import { View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';


import { StyleSheet } from 'react-native';

export default function GradebookScreen() {
  const { threshold } = useContext(GradebookContext);

  return (
    <View style={styles.container}>
      <ThemedText style={styles.text}>Current A+ Threshold: {threshold}</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
    padding: 20,
    backgroundColor: '#f5f5f5', // Light background color for the screen
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333', // Dark text color for readability
  },
});
