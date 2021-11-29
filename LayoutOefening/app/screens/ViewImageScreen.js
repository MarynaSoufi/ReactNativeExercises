import React from 'react';
import { Image, StyleSheet, View } from "react-native";
import  Button from '../components/Button';
import colors from '../config/colors';

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <Button styles={styles.close}/>
      <Button styles={styles.open}/>
       <Image resizeMode="contain" style={styles.image} source={require("../assets/chair.jpg")}/>
    </View>
   
  )
}
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
  container: {
    backgroundColor: "black",
    flex: 1,
  },
  close: {
    width: 60,
    height: 60,
    backgroundColor: colors.primary,
    position: "absolute",
    top: 40,
    left: 30,
  },
  open: {
    width: 60,
    height: 60,
    backgroundColor: colors.secondary,
    position: "absolute",
    top: 40,
    right: 30,
  }
})
export default ViewImageScreen
