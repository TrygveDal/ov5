import React, {useState} from 'react';
import { View, StyleSheet, ScrollView, Image, Alert } from 'react-native';
import Card from './components/Card'
import Header from './components/Header'

const HomeScreen = ({navigation}) => {
  const image = {
    logo: require('./images/logo.png'),
    tyholttårn: require('./images/tyholttårn.jpg'),
    gruppemåltid: require('./images/gruppemåltid.jpg'),
  }

  var data = require('../data/dummydata.json')
  const initialState = data.artikler;

  const header_items = ['Restaurants', 'Takeaway', 'About us'];

  const [cards, setCards] = useState(initialState);
  
  const showCardItems = (category) => {

    if (category == 'Restaurants'){
      navigation.navigate('Restaurants');
    }
    
  }

  return (
    <ScrollView>
        <Header logo={image.logo} items={header_items} handlePress={showCardItems} />
        <Image source={image.gruppemåltid} style={{width: 400, height: 400}} />
        {cards.map((card, i) => {
            return <Card title={card.title} displayText={card.displayText} handlePress={() => {navigation.navigate('Article', {article: card})}} />
          })}
    </ScrollView>
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

export default HomeScreen;