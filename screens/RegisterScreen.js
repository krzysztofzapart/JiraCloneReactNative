import { NavigationContainer, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { auth } from '../firebase';

const RegisterScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [verifPassword, setVerifPassword] = useState('')

    const navigation = useNavigation()
    const signUpHandler = () => {
        auth
        .createUserWithEmailAndPassword(email,password)
        .then(credentials => {
            const user = credentials.user;
        })
        .catch(error => alert(error.message))
    }
 
    const navigateToLoginPage = () =>{
        navigation.navigate("Login")
    }

    return (
        <KeyboardAvoidingView style = {styles.container} behavior='padding'>
            <View style={styles.inputContainer}>
                <TextInput 
                placeholder='Email:' 
                style={styles.input} 
                value={email} 
                placeholderTextColor='white'
                onChangeText={text =>setEmail(text)}>

                </TextInput>
                <TextInput 
                placeholder='Password:' 
                style={styles.input}
                value={password}
                onChangeText={text=>setPassword(text)}
                placeholderTextColor='white'
                secureTextEntry>

                </TextInput>
                <TextInput 
                placeholder='Confirm password:' 
                style={styles.input}
                value={verifPassword}
                onChangeText={text=>setVerifPassword(text)}
                placeholderTextColor='white'
                secureTextEntry>

                </TextInput>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={signUpHandler} style={styles.button}>
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={navigateToLoginPage} style={[styles.button, styles.buttonOutline]}>
                    <Text style={styles.buttonOutlineText}>Back</Text>
                </TouchableOpacity>
                
            </View>
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#144552',
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

