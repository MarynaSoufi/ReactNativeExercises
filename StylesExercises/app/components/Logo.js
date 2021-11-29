import React from 'react';
import { Image , StyleSheet, View, Text } from "react-native";

const Logo = () => {
  return (
    <View style={styles.div}>
        <Image style={styles.image} source={require("../assets/logo-red.png")}/>
        <Text style={styles.text}>Sell What You Don't Need</Text>
    </View>
  
      
  )
}
const styles = StyleSheet.create({
  image: {
    width: 95,
    height: 95,
    marginBottom: 20,
  
  },
  div: {
    position: "absolute",
    top: 80,
    alignItems: "center",
  },
  text: {
    fontFamily: Platform.OS === "android" ? "Roboto" : "Courier",
    fontSize: 20,
  }
})
export default Logo
