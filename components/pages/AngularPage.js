import { Text, View, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import TopMenuBar from '../TopMenuBar';
import Stars from '../Stars';
import { ProgressBar, Colors } from 'react-native-paper';

export default function AngularPage({ navigation }) {

  return (
    <View>
      <TopMenuBar {...{ navigation }} />
      <View style={styles.container}>
        <Text style={styles.paragraph}>YOUR ANGULAR PROGRESS</Text>
             <ProgressBar style={{ marginTop: 0, height: 15, width:290 }} progress={0.1} color="#ffffcc" />
        <Text  style={styles.paragraph}>ANGULAR</Text>
              <Image style={styles.image} source={require("../../assets/icons/angularLogo.png")} />
                 <Stars  {...{ navigation,lang:'ANGULAR' }}  />
                <TouchableOpacity
         onPress={() =>  navigation.navigate('Quiz', params= { lang: 'ANGULAR',difficulty:'MIDDLE' })}>
          <Image style={styles.startBtn} source={require("../../assets/icons/startBtn.png")} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
     justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#18C5C5',
    height: 590,
  },
  image: {
    width: 100,
    height: 100,
  },
  startBtn: {
    width: 130,
    height: 130,
    marginBottom:70
  },
  paragraph: {
    margin: 24,
    fontSize: 14,

  }
});
