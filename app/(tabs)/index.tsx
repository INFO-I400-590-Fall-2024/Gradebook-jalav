import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import FirebaseExample from '@/components/FirebaseExample';

import { useContext } from 'react';
import { GradebookContext } from '@/components/GradebookContext';
import { TextInput } from 'react-native';


export default function HomeScreen() {
  const { threshold, setThreshold } = useContext(GradebookContext);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
<TextInput
  style={{
    width: '80%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    fontSize: 16,
    color: '#333',
  }}
  placeholder="Set A+ Threshold"
  placeholderTextColor="#888"
  value={String(threshold)}
  onChangeText={text => setThreshold(Number(text))}
/>

    <FirebaseExample/>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
