import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, FlatList, Alert} from 'react-native';
import uuid from 'uuidv4';
import Header from "./components/Header";
import AddItem from "./components/AddItem";


const App = () => {

  const [items, setItems] = useState([

    {    id: uuid(), text: 'Milk'},
    {    id: uuid(), text: 'Egg'},
    {    id: uuid(), text: 'Bread'},
    {    id: uuid(), text: 'Jam'}

  ]);

  const deleteItem = (id) => {
    setItems(prevItem => {
      return prevItem.filter(item => item.id !== id)
    })
  };
  const addItem = (text) =>{
    if(!text){
          Alert.alert('Error', 'Please enter an item',
              {text: 'Ok'})
    }else{
      setItems(prevItem => {
        return [{id: uuid(), text },...prevItem]
      })
    }

  };
  return (
      <View style={styles.container}>
      <Header title='Shopping List'/>
      <AddItem addItem={ {addItem}}/>
      <FlatList renderItem={({item}) =>
          <ListItem item={item}  deleteItem = {deleteItem}/>} data={items}/>
      <Text style={styles.text}> Hello:
          <Image source ={{uri: 'https://randomuser.me/api/portaits/men/1.jpg'}} style={styles.img}/>
      </Text>
      </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 60
  },
  text:{
    color: 'darkblue',
    fontSize: 30
  },
  img:{
    width: 100,
    height: 100,
    borderRadius: 100 / 2
  }

});
export default App;
