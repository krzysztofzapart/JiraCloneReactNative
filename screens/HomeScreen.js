import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from '../navigation/TabNavigator';


const HomeScreen = () => {
  return (
    <SafeAreaProvider>
        <TabNavigator />
    </SafeAreaProvider>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
