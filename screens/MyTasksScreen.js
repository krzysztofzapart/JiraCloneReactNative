import React, {useState,useEffect} from 'react';
import {View, Text, StyleSheet, Image,Appearance} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native';
import  Task from '../components/Tasks';
import db, { auth }from '../firebase';
import { collection, onSnapshot, where, query } from 'firebase/firestore';


export default function MyTasks() {
  const [tasks, setTasks] = useState([]);
  useEffect(()=> {
    const user = auth.currentUser.uid;
    onSnapshot(query(collection(db,'tasks'), where("user","==",user)), (snapshot)=>{
      setTasks(snapshot.docs.map((doc)=>doc.data()));
    })
  }, [])

    return (
        <View style={styles.mainView}>
        <View style={styles.toggleView}>
          <TouchableOpacity>
            <View style={styles.toggleLeft}><Text style={styles.toggleTextLeft}>TODO</Text></View>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.toggleTextRight}>In Progress</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.allTaskView}>
            <Text style={styles.taskTitle}>Tasks</Text>
            <ScrollView>
            {
            tasks.map((item, index) => {
              return (
                  <Task title={item.title} desc={item.description} /> 
              )
            })
        }
        </ScrollView>
       
        </View>
    </View>
    //   <View style={styles.container}>
  
    //     <FlatList 
    //       keyExtractor={(item) => item.id} 
    //       data={people} 
    //       renderItem={({ item }) => ( 
    //         <Text style={styles.item}>{item.name}</Text>
    //       )}
    //     />
  
    //   </View>
    );
  }
  
  const styles = StyleSheet.create({
    mainView:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#212529'
      },
      allTaskView:{
        width:'85%',
        marginTop:40,
      },
      toggleTextLeft:{
        fontWeight:'bold',
        fontSize:15,
        color:'white',
      },
      toggleLeft:{
        width:110,
        height:20,
        backgroundColor:'#212529',
        borderRadius:5,
        marginLeft:5,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
      },
      toggleTextRight:{
        fontWeight:'bold',
        fontSize:15,
        marginRight:10,
      },
      toggleView:{
        width:210,
        height:30,
        backgroundColor:'#fff',
        display:'flex',
        flexDirection:'row',
        marginTop:80,
        justifyContent:'space-between',
        alignItems:'center',
        borderRadius:5,
      },
      taskTitle:{
        fontSize:20,
        fontWeight:'bold',
        color:'white',
      }
});
