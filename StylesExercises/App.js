import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from './app/components';
import colors from './app/config/colors';
import { WelcomeScreen, ViewImageScreen, DetailScreen } from './app/screens';
import { Card } from './app/components';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Button styleBtn={styles.button} styleText={styles.text} text="LOGIN"></Button>
    // </View>

    // <WelcomeScreen />

    // <View style={styles.container2}>
    //   <Card title="Red jacket  for sale!" subtitle="$100" src={require('./app/assets/jacket.jpg')}></Card>
    // </View>

    // <DetailScreen></DetailScreen>

    <ViewImageScreen></ViewImageScreen>
  );
}

const styles = StyleSheet.create({
  cardContainer: {

  },
  container: {
    flex: 1,
    backgroundColor:  '#f8f4f4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
    backgroundColor:  '#f8f4f4',
    alignItems: 'center',
  },
  button: {
    backgroundColor: colors.primary,
    width: "100%",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    borderRadius: 50,
    
  },
  text: {
    color: "white",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Courier",
    fontSize: 20,
    fontWeight: "bold",
    
  }
});
