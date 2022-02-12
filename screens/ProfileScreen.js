import { NavigationContainer, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Alert } from 'react-native';
import  db, {auth} from '../firebase';
import { collection, onSnapshot, addDoc, doc } from 'firebase/firestore'; 
import firebase from "firebase/app"; ;

const Profile = () => {
    const UserEmail = auth.currentUser.email;
    const UserPhoneNumber = auth.currentUser.phoneNumber;
    const UserPasswd = auth.currentUser.password;
    const [email, setEmail] = useState(UserEmail)
    const [phoneNumber, setPhoneNumber] = useState(UserPhoneNumber)
    const [password, setPassword] = useState(UserPasswd)
    const [verifPassword, setVerifPassword] = useState(UserPasswd)
    const [oldPasswd, setOldPasswd] = useState('')

    const reauthenticate = (currentPassword) => {
      var user = auth.currentUser;
      var credentials = firebase.auth.EmailAuthProvider.credentials(user.email,currentPassword);
      
      return user.reauthenticateWithCredential(credentials)
    }
    const updateData = () =>{
        reauthenticate(oldPasswd).then(() =>  {
        auth.currentUser.updatePassword(password).then(()=>{
            Alert.alert("Password has been changed");
          })
        })

    }

  return (
    <KeyboardAvoidingView style = {styles.container} behavior='padding'>
            <View style={styles.inputContainer}>
                <TextInput 
                placeholder="Email: "
                style={styles.input} 
                value={email} 
                placeholderTextColor='white'
                onChangeText={text =>setEmail(text)}>
                </TextInput>

                <TextInput 
                placeholder="Phone Number: "
                style={styles.input}
                value={phoneNumber}
                onChangeText={text=>setPhoneNumber(text)}
                placeholderTextColor='white'>
                </TextInput>
                <TextInput 
                placeholder="Old Password: "
                style={styles.input}
                value={oldPasswd}
                onChangeText={text=>setOldPasswd(text)}
                placeholderTextColor='white'
                secureTextEntry>
                </TextInput>

                <TextInput 
                placeholder="New Password: "
                style={styles.input}
                value={password}
                onChangeText={text=>setPassword(text)}
                placeholderTextColor='white'
                secureTextEntry>
                </TextInput>
                <TextInput 
                placeholder="Confirm New Password: "
                style={styles.input}
                value={verifPassword}
                onChangeText={text=>setVerifPassword(text)}
                placeholderTextColor='white'
                secureTextEntry>
                </TextInput>

            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={updateData} style={styles.button}>
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={ () => auth.signOut()} style={styles.button}>
                    <Text style={styles.buttonText}>Log Out</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
};

export default Profile;

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
