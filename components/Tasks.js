import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Task = (props) => {
    return (
        <View style={styles.stockView}>
        <View style={styles.stockLogoAndName}>
           <View style={styles.stockNameView}>
              <Text style={styles.stockTicker}>{props.title}</Text>
              <Text style={styles.stockName}>{props.desc}</Text>
           </View>
        </View>
        <Text style={styles.stockPrice}></Text>
    </View>
    )
}
export default Task;

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