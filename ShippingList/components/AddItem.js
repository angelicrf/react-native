import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons';

const AddItem = ({item, addItem}) => {
    const [text,setText] = useState('');
    const onChange = (textValue) => setText(textValue);

    return (
        <View>
            <TextInput placeholder'Add Item..' onChangeText={onChange}
            style={styles.input}/>
            <TouchableOpacity style={styles.btn} onPress={() => addItem (text)}>
                <Text style={styles.btnText}> <Icon name='plus' size={20}/>
                   Add Item
                </Text>
            </TouchableOpacity>
        </View>
    );
};
Header.defaultProps = {
    title: 'Shopping List'
};
const styles = StyleSheet.create({
    input: {
        height: 60,
    },
    btn: {
        backgroundColor:'#c2bad8',
        padding: 9,
        fontSize: 16,
    },
    btnText: {
        color: 'darkblue',
        fontSize: 20,
        textAlign: 'center',
    }

});
export default AddItem;
