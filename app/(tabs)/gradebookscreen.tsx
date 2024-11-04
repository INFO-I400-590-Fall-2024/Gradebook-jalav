import { useContext } from 'react';
import { GradebookContext } from '@/components/GradebookContext';
import { View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { StyleSheet } from 'react-native';

export default function GradebookScreen() {
  const { thresholds } = useContext(GradebookContext);

  return (
    <View style={styles.container}>
      <ThemedText style={styles.text}>Current A+ Threshold: {thresholds.APlus}</ThemedText>
      <ThemedText style={styles.text}>Current B+ Threshold: {thresholds.BPlus}</ThemedText>
      <ThemedText style={styles.text}>Current C+ Threshold: {thresholds.CPlus}</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 5,
  },
});
