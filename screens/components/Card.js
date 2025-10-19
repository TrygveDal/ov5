import React, {useState} from 'react';
import { Text, View, StyleSheet, Image, Pressable } from 'react-native';

const Card = (props) => {

  var text = props.displayText;
  if (text.length > 100){
    text = text.slice(0,97) + "...";
  }

  const handlePress = () => {
    try {props.handlePress()}
    catch {return}
  };
  return (
      <Pressable onPress ={handlePress}>
      <View style={styles.card}>
      <Text style={styles.title}>{props.title}</Text>
      <View style={{flex: 1, justifyContent: "flex-start"}}>
          <Text style={styles.text} >{text}</Text>
      </View>
    </View>
    </Pressable>
    
    
    
  );
}

const styles = StyleSheet.create({
  card: {
    height: 100,
    minWidth: 150,
    borderRadius: 5,
    margin: 10,
    padding: 5,
    backgroundColor: "#d4d4d4f5",
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20
  },
  text: {
    fontSize: 15,
  }
});

export default Card;