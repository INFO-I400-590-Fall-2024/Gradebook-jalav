import { Image, StyleSheet, Platform, TextInput } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import FirebaseExample from '@/components/FirebaseExample';
import { useContext } from 'react';
import { GradebookContext } from '@/components/GradebookContext';

export default function HomeScreen() {
  const { thresholds, setThresholds } = useContext(GradebookContext);

  const handleThresholdChange = (value, grade) => {
    setThresholds(prev => ({
      ...prev,
      [grade]: Number(value)
    }));
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }
    >
      <TextInput
        style={styles.input}
        placeholder="Set A+ Threshold"
        placeholderTextColor="#888"
        value={String(thresholds.APlus)}
        onChangeText={text => handleThresholdChange(text, 'APlus')}
      />

      <TextInput
        style={styles.input}
        placeholder="Set B+ Threshold"
        placeholderTextColor="#888"
        value={String(thresholds.BPlus)}
        onChangeText={text => handleThresholdChange(text, 'BPlus')}
      />

      <TextInput
        style={styles.input}
        placeholder="Set C+ Threshold"
        placeholderTextColor="#888"
        value={String(thresholds.CPlus)}
        onChangeText={text => handleThresholdChange(text, 'CPlus')}
      />

      <FirebaseExample />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  input: {
    width: '80%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    fontSize: 16,
    color: '#333',
  },
});
