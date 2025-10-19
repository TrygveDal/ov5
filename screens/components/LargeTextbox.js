import React, {useState} from 'react';
import { Text, View, StyleSheet} from 'react-native';

const LargeTextbox = (props) => {

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{props.title}</Text>
      <View style={styles.textbox}>
            <Text style={styles.text} >{props.displayText}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    margin: 10,
    padding: 5,
    backgroundColor: "#d4d4d4f5",
  },
  textbox: {
    flex: 1, 
    justifyContent: "flex-start", 
    backgroundColor: "#ffffffff", 
    borderRadius: 5, 
    margin: 5, 
    padding: 5
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20
  },
  text: {
    fontSize: 15,
  }
});

export default LargeTextbox;