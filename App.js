import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';

import Header from './app/layouts/Header';
import ItemList from './app/layouts/ItemList';
import AddItem from './app/layouts/AddItem';

import list from './app/config/items';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [items, setItems] = useState(list.items);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  }

  const addItem = (text) => {
    setItems(prevItems => {
      return [{id: uuidv4(), text},...prevItems]
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header 
        title="Shopping List"/>
      <AddItem addItem={addItem} />
      <FlatList 
        data={items} 
        renderItem={({item}) => <ItemList item={item} deleteItem={deleteItem}/>}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;