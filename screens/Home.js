import React, {useState} from 'react';
import { View, StyleSheet, ScrollView, Image, Alert } from 'react-native';
import Card from './components/Card'
import Header from './components/Header'
import { SafeAreaView } from 'react-native/types_generated/index';

const HomeScreen = ({navigation}) => {
  const image = {
    logo: require('./images/logo.png'),
    tyholttårn: require('./images/tyholttårn.jpg'),
    gruppemåltid: require('./images/gruppemåltid.jpg'),
  }

  const initialState = [
    {id: 1, title: 'Spesialkampanje', displayText: "Vi har en spesialkampanje på burgere igjennom hele september...", handlePress: ()=>{}},
    {id: 1, title: 'Bli medlem', displayText: "Registrer deg som medlem for å motta poeng og premier!", handlePress: ()=>{}},
  ]

  const header_items = ['Restaurants', 'Takeaway', 'About us'];

  const [cards, setCards] = useState(initialState);
  
  const showCardItems = (category) => {

    if (category == 'Restaurants'){
      navigation.navigate('Restaurants');
    }
    
  }

  /*
<ScrollView>
        <Header logo={image.logo} items={header_items} handlePress={showCardItems} />
        <View style={styles.container}>
          {page == 'main' && 
            <Image source={image.gruppemåltid} style={{width: 400, height: 400}} />
          }
          {page == 'main' && cards.map((card, i) => {
            return <Card title={card.title} displayText={card.displayText} handlePress={card.handlePress} />
          })}
          {page == 'items' &&
          items.map((item: {navn: string, adresse: string, data: {}[]}) => {
            return <Card title={item.navn} displayText={item.adresse} />
          })
          }
        </View>
      </ScrollView>
  */

  return (
    <SafeAreaView>
        <Header logo={image.logo} items={header_items} handlePress={showCardItems} />
        <Image source={image.gruppemåltid} style={{width: 400, height: 400}} />
        {cards.map((card, i) => {
            return <Card title={card.title} displayText={card.displayText} handlePress={showCardItems} />
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

export default HomeScreen;