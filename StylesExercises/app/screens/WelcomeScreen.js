import React from 'react';
import { ImageBackground, StyleSheet  } from "react-native";
import Button from '../components/Button';
import Logo from '../components/Logo';
import colors from '../config/colors';

const WelcomeScreen = () => {
  return (
    <ImageBackground blurRadius={5} style={styles.image} source={require('../assets/background.jpg')}>
      <Logo/>
      <Button  styleBtn={styles.loginBtn} styleText={styles.text} text="LOGIN"></Button>
      <Button  styleBtn={styles.registerBtn} styleText={styles.text} text="REGISTER"></Button>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: "center",
  },
  loginBtn: {
    backgroundColor: colors.primary,
    width: "90%",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    borderRadius: 50,
    marginBottom: 20,
  }
  ,
  registerBtn: {
    backgroundColor: colors.secondary,
    width: "90%",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    borderRadius: 50,
    marginBottom: 20,
  },
  text: {
    color: "white",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Courier",
    fontSize: 18,

  }
})

export default WelcomeScreen
