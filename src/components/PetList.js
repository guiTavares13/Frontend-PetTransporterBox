import React from "react";
import { StyleSheet, Text, SafeAreaView, FlatList} from "react-native";
import { useState } from "react";
import Pet from './Pet';
import BtnVisualizeAll from '../components/BtnVisualizeAll'

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

    // ------------------------- Listagem dos pets ---------------
    // const [state = {
    //     pets: [{
    //         id: Math.random(),
    //         name: 'Tobias',
    //         type: 'Cachorro'
    //     }]
    // }, setPetsItems] = useState([]);

    // petList = () => {
    //     console.log('1')
    //     try {
    //         fetch(`${server}/pet/`, {
    //             method: 'GET',
    //             headers: {
    //                 'Content-type': 'application/json; charset=UTF-8',
    //             },
    //         })
    //         .then((response) =>{
    //             setPetsItems(response);
    //           })
           
    //     } catch(err){
    //         showError(err)
    //     }
    // }
    // ------------------------- Listagem dos pets ---------------

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Todos os seus pets</Text>
            <FlatList style={styles.pet} data={state.pets} keyExtractor={item => `${item.id}`}
            renderItem={({item}) => <Pet {...item}/>}/>
            <BtnVisualizeAll/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: 30
    }, 
    title: {
        fontSize: 20,
        margin: 15
    }, 
    pet: {
        width: '90%'
    }
})