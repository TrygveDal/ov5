import React, {useState} from 'react';
import { View, StyleSheet, ScrollView, Image, Alert } from 'react-native';
import Card from './components/Card'
import Header from './components/Header'
import { SafeAreaView } from 'react-native-safe-area-context';

const RestaurantsScreen = () => {

  var data = require('../data/dummydata.json');

  const header_items = ['Restauranter', 'Takeaway', 'Om oss'];

  const [items, setItems] = useState(data.restauranter)

  return (
    <SafeAreaView>
      <Header logo={image.logo} items={header_items} handlePress={showCardItems} />
      {items.map((item) => {
            return <Card title={item.navn} displayText={item.adresse} />
          })}
    </SafeAreaView>
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