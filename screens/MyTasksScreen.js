import React, {useState} from 'react';
import {View, Text, StyleSheet, Image,Appearance} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-web';
import  Task from '../components/Tasks';

export default function MyTasks() {
    const [people, setPeople] = useState([
      { name: 'Task1', id: '1', desc: "Opis1"},
      { name: 'Task2', id: '2', desc: "Opis2" },
      { name: 'Task3', id: '3', desc: "Opis3" },
      { name: 'Task4', id: '4', desc: "Opis4" },
      { name: 'Task5', id: '5', desc: "Opis5" },
      { name: 'Task6', id: '6', desc: "Opis6" },
      { name: 'Task7', id: '7', desc: "Opis7"},
    ]);
  
    return (
        <View style={styles.mainView}>
        <View style={styles.toggleView}>
            <View style={styles.toggleLeft}><Text style={styles.toggleTextLeft}>TODO</Text></View>
            <Text style={styles.toggleTextRight}>In Progress</Text>
        </View>
        <View style={styles.sharePricesView}>
            <Text style={styles.stocksHeading}>Tasks</Text>
            
            {
            people.map((item, index) => {
              return (
                  <Task title={item.name} desc={item.desc} /> 
              )
            })
        }
       
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
      sharePricesView:{
        width:'85%',
        marginTop:40,
      },
      stockName:{
          color:'white',
      },
      stockNameView:{
        marginLeft:15
      },
      stockView:{
        width:'100%',
        height:60,
        borderBottomWidth:1,
        borderColor:'#E2E2E2',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:20,
      }, 
      stockLogoAndName:{
        display:'flex',
        flexDirection:'row'
      },
      stockPrice:{
        fontWeight:'bold',
        fontSize:15,
        color:'white',
      },
      stockLogo:{
        width:31,
        height:31,
        backgroundColor:'#E2E2E2',
        borderRadius:100,
      },
      stockTicker:{
        fontWeight:'bold',
        fontSize:15,
        color:'white',
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
      stocksHeading:{
        fontSize:20,
        fontWeight:'bold',
        color:'white',
      }
});
