import { NavigationContainer, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import  db, {auth} from '../firebase';
import { collection, onSnapshot, addDoc, doc } from 'firebase/firestore';

const AddTask = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const addNew = async () =>{
        const collectionReference = collection(db, 'tasks');
        const user = auth.currentUser.uid;
        const payload = {title, description, user};
        await addDoc(collectionReference,payload);
    }
  return (
    <KeyboardAvoidingView style = {styles.container} behavior='padding'>
            <View style={styles.inputContainer}>
                <TextInput 
                placeholder='Title:' 
                style={styles.input} 
                value={title} 
                placeholderTextColor='white'
                onChangeText={text =>setTitle(text)}>
                </TextInput>

                <TextInput 
                placeholder='Description:' 
                style={styles.input}
                value={description}
                onChangeText={text=>setDescription(text)}
                placeholderTextColor='white'>
                </TextInput>

            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={addNew} style={styles.button}>
                    <Text style={styles.buttonText}>Add Task</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
};

export default AddTask;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#212529',
    },
    inputContainer: {
      width: '80%',
    },
    input: {
      backgroundColor: '#4d194d',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 5,
      color:"white",
    },
    buttonContainer: {
      width: '60%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 40,
    
    },
    button: {
      backgroundColor: '#312244',
      width: '100%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
      borderColor: '#312244'
    },
    buttonOutline: {
      backgroundColor: 'white',
      marginTop: 5,
      borderColor: '#312244',
      borderWidth: 2,
    },
    buttonText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 16,
    },
    buttonOutlineText: {
      color: '#312244',
      fontWeight: '700',
      fontSize: 16,
    },
  })
