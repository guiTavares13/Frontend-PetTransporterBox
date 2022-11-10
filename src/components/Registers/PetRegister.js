import React from "react";
import { SafeAreaView, TouchableOpacity, Text, View, TextInput, StyleSheet, Image, Platform} from 'react-native'
import { useState } from "react";
import global from '../../../global'
import {server, showError} from '../../common'
import AuthInput from "../Auth/AuthInput";
import DropDownPicker from 'react-native-dropdown-picker';

export default props => {

    console.log(props)

    const [openBreed, setOpenBreed] = useState(false);
    const [valuesBreed, setValueBreed] = useState();
    const [itemsBreed, setItemsBreed] = useState([
    {label: 'Spain', value: 'spain'},
    {label: 'Madrid', value: 'madrid'},
    {label: 'Barcelona', value: 'barcelona'},
    {label: 'Italy', value: 'italy'},
    {label: 'Rome', value: 'rome'},
    {label: 'Finland', value: 'finland'}
  ]);

    const [openTypes, setOpenTypes] = useState(false);
    const [valueTypes, setValueTypes] = useState();
    const [itemsType, setItemsType] = useState([
    {label: 'Cachorro', value: 'cachorro'},
    {label: 'Gato', value: 'gato'}
  ]);

    var [initialState = {
        name: 'Tobias',
        //age: 12,
        breed: 'Caramelo',
        type: 'Cachorro',
    }, setState] = useState()


    var [state = {
        ...initialState
    }, setState] = useState()

    register = () => {
        try {
            fetch(`${server}/pet`, {
                method: 'POST',
                body: JSON.stringify({
                    id: props,
                    name: state.name,
                    age: state.age,
                    breed: 'Caramelo',
                    category: state.type
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then((response) => response.json())
            .then((json) => console.log(json));
           
        } catch(err){
            showError(err)
        }
    }

    function handleListItemPress(props){
        props.onPress(props);
    }


    return (
        <SafeAreaView style={global.container}>
            <View>
                <Text style={styles.title}>Cadastrar Pet</Text>
            </View>
            <View style={styles.formContainer}>
                <AuthInput icon='paw' style={styles.input} placeholder="Nome do pet" value={state.name}
                onChangeText={cName => setState(prevState =>({...prevState, name: cName}))}/>
                <AuthInput icon='recycle' style={styles.input} placeholder="Idade" value={state.age}
                onChangeText={cAge => setState(prevState =>({...prevState, breed: cAge}))}/>

                <View style={styles.dropDown}>
                    <DropDownPicker
                        open={openTypes}
                        value={valueTypes}
                        items={itemsType}
                        setOpen={setOpenTypes}
                        setValue={setValueTypes}
                        setItems={setItemsType}
                        theme="LIGHT"
                        multiple={true}
                        mode="BADGE"
                        placeholder="Tipo"
                        badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76f51", "#8ac926", "#00b4d8", "#e9c46a"]} 
                        />
                </View>

                <View style={styles.dropDown}>
                    <DropDownPicker
                        style={{paddingBottom: 10}}
                        open={openBreed}
                        value={valuesBreed}
                        items={itemsBreed}
                        setOpen={setOpenBreed}
                        setValue={setValueBreed}
                        setItems={setItemsBreed}
                        theme="LIGHT"
                        multiple={true}
                        mode="BADGE"
                        placeholder="Raça"
                        badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76f51", "#8ac926", "#00b4d8", "#e9c46a"]}
                    />
                </View>
            </View>
            <TouchableOpacity 
                    title="Button Access" 
                    style={styles.buttonRegister}
                    onPress={register}><Text style={styles.textButtonAccess}>
                        Cadastrar
                    </Text>
            </TouchableOpacity> 
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        margin: 30
    }, 
    buttonRegister: {
        backgroundColor: '#2F80ED',
        borderRadius: 10,
        paddingLeft: 70,
        paddingRight: 70,
        paddingTop: 15,
        paddingBottom: 15,
        margin: 10
    },
    formContainer: {
        backgroundColor: 'rgba(0,0,0, 0.8)',
        padding: 20,
        width: '90%',
        borderRadius: 10
    },
    button:{
        margin:30,
        backgroundColor: '#2F80ED',
        borderRadius: 10,
        paddingLeft: 70,
        paddingRight: 70,
        paddingTop: 15,
        paddingBottom: 15
    },
    input: {
        marginTop: 10,
        backgroundColor: '#FFF',
        borderRadius: 10,
        height: 40,
    },
    dateBirthBar: {
        flexDirection: "row",
        alignItems: 'stretch',
    }, 
    dropDown: {
       marginTop: 10
    }
})