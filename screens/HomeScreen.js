import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.chuj}>CIPA RUUUCHANIE</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
    chuj:{
        fontSize: 40,
        
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    
});
