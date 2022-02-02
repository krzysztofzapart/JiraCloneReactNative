import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Task = (props) => {
    return (
      <TouchableOpacity>
        <View style={styles.taskView}>
        <View style={styles.taskImgAndName}>
           <View style={styles.taskNameView}>
              <Text style={styles.taskTicker}>{props.title}</Text>
              <Text style={styles.taskName}>{props.desc}</Text>
           </View>
        </View>
        <Text style={styles.taskDate}>{props.date}</Text>
    </View>
    </TouchableOpacity>
    )
}
export default Task;

const styles = StyleSheet.create({
    mainView:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#212529'
      },
      taskName:{
          color:'white',
      },
      taskNameView:{
        marginLeft:15
      },
      taskView:{
        width:'100%',
        height:60,
        borderBottomWidth:1,
        borderColor:'#E2E2E2',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:20,
      }, 
      taskImgAndName:{
        display:'flex',
        flexDirection:'row'
      },
      taskDate:{
        fontWeight:'bold',
        fontSize:15,
        color:'white',
      },
      taskTicker:{
        fontWeight:'bold',
        fontSize:15,
        color:'white',
      }
});