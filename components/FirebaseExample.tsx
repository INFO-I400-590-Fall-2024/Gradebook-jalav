import React, { useState, useEffect } from 'react';
import { View, TextInput, Button } from 'react-native';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../firebase.config';
import { ThemedText } from './ThemedText';

export default function FirebaseExample() {
  const [items, setItems] = useState<any[]>([]);
  const [name, setName] = useState<string>('');
  const [grade, setGrade] = useState<string>('');

  // Fetch items from Firebase
  useEffect(() => {
    const fetchItems = async () => {
      const querySnapshot = await getDocs(collection(db, 'students'));
      const itemsList: any[] = [];
      querySnapshot.forEach((doc) => {
        itemsList.push({ id: doc.id, ...doc.data() });
      });
      setItems(itemsList);
    };

    fetchItems();
  }, []);

  // Add new student to Firebase
  const addItem = async () => {
    if (name.trim() === '' || grade.trim() === '') {
      alert('Please enter both name and grade.');
      return;
    }

    try {
      const docRef = await addDoc(collection(db, 'students'), {
        name,
        grade,
      });
      console.log('Document written with ID: ', docRef.id);
      
      // Reset input fields after submission
      setName('');
      setGrade('');

      // Fetch updated items
      const querySnapshot = await getDocs(collection(db, 'students'));
      const updatedItems: any[] = [];
      querySnapshot.forEach((doc) => {
        updatedItems.push({ id: doc.id, ...doc.data() });
      });
      setItems(updatedItems);
      
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <View>
      <ThemedText>Your Firebase Data Here</ThemedText>
      {items.map((item) => (
        <ThemedText key={item.id}>
          {item.name} - {item.grade}
        </ThemedText>
      ))}

      {/* Input Form */}
      <View style={{ marginTop: 20 }}>
        <TextInput
          placeholder="Enter student name"
          value={name}
          onChangeText={setName}
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 10,color:'white' }}
        />
        <TextInput
          placeholder="Enter grade"
          value={grade}
          onChangeText={setGrade}
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 10, color:'white' }}
        />
        <Button title="Add Student" onPress={addItem} />
      </View>
    </View>
  );
}
