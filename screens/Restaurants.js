import React, {useState} from 'react';
import { View, StyleSheet, ScrollView, Image, Alert } from 'react-native';
import Card from './components/Card'
import Header from './components/Header'

const RestaurantsScreen = ({navigation, route}) => {

  var data = require('../data/dummydata.json');

  const header_items = ['Restauranter', 'Takeaway', 'Om oss'];

  const [items, setItems] = useState(data.restauranter)

  return (
    <View>
      {items.map((item) => {
            return <Card title={item.navn} displayText={item.adresse} />
          })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    alignContent: "center",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  section: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    backgroundColor: "#eeeeeef5",
  }
});

export default RestaurantsScreen;