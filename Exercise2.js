import React,{useState, useEffect} from 'react';
import {StatusBar, Button, View} from 'react-native';
import {Audio} from "expo-av";

export default function Exercise2() {
  const [mysound, setSound] = useState();

  async function playSound() {
      const file = require('./short1.wav');
      const { sound } = await Audio.Sound.createAsync(file);
      setSound(sound);
      await sound.playAsync();
  }

  useEffect (() => {
      return mysound ? () => {
          console.log('Unloading Sound');
          mysound.unloadAsync();
      }
      : undefined;
      }, [mysound]);

  return (
    <View>
      <StatusBar />
      <Button title="Play Sound" onPress={
      ()=>{
        playSound()
      }}
      />
    </View>
  );
}
