import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';

import Header from './app/layouts/Header';
import ItemList from './app/layouts/ItemList';

import list from './app/config/items';

const App = () => {
  const [items, setItems] = useState(list.items);

  return (
    <SafeAreaView style={styles.container}>
      <Header 
        title="Shopping List"/>
      <FlatList 
        data={items} 
        renderItem={({item}) => <ItemList item={item}/>}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;