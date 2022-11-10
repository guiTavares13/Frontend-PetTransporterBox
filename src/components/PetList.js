import React from "react";
import { StyleSheet, SafeAreaView, FlatList} from "react-native";
import { useState, useRef } from "react";
import Pet from './Pet';

export default props => {

    var [state = {
       pets: [{
        id: Math.random(),
        name: 'Tobias',
        type: 'Dog',
       }, {
        id: Math.random(),
        name: 'Pukimon',
        type: 'Cat',
       }]
    }, setState] = useState()

    return(
        <SafeAreaView style={styles.container}>
            <FlatList data={state.pets} keyExtractor={item => `${item.id}`}
            renderItem={({item}) => <Pet {...item}/>}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    }
})