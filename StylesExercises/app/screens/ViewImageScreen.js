import React from 'react';
import { Image, StyleSheet, View } from "react-native";
import colors from '../config/colors';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Ionicons style={styles.open} name="md-close-sharp" size={34} color="white" />
      </View>
      <View>
        <MaterialCommunityIcons style={styles.close} name="trash-can-outline" size={34} color="white" />
      </View>
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
  wrapper:{
    justifyContent: 'space-between',
    flexDirection:'row',
  },
  close: {
    position: "absolute",
    top: 40,
    left: 30,
  },
  open: {
    position: "absolute",
    top: 40,
    right: 30,
    
  },
})
export default ViewImageScreen
