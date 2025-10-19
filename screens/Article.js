import React, {useState} from 'react';
import { View, StyleSheet, ScrollView, } from 'react-native';
import LargeTextbox from './components/LargeTextbox'

const ArticleScreen = ({navigation, route}) => {

  const {article} = route.params;

  return (
    <ScrollView>
      <LargeTextbox title={article.title} displayText={article.displayText} />
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

export default ArticleScreen;