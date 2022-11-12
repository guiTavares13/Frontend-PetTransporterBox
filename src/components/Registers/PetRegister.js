import React from "react";
import { SafeAreaView, TouchableOpacity, Text, View, Picker, StyleSheet, Image, Platform} from 'react-native'
import { useState, useCallback } from "react";
import global from '../../../global'
import {server, showError} from '../../common'
import AuthInput from "../Auth/AuthInput";
import DropDownPicker from 'react-native-dropdown-picker';

export default props => {

    var [initialState = {
        name: 'Tobias',
        age: 12,
        type: '',
        breed: ''
    }, setState] = useState()

    var [state = {
        ...initialState
    }, setState] = useState()

    const [typeOpen, setTypeOpen] = useState(false);
    const [typeValue, setTypeValue] = useState([]);
    const [typeItems, setTypeItems] = useState([
        { label: "Cachorro", value: "cachorro" },
        { label: "Gato", value: "gato" },
    ]);

    const [breedOpen, setBreedOpen] = useState(false);
    const [breedValue, setbreedValue] = useState([]);
    const [breedItems, setBreedItems] = useState([]);

    const [breedItensForDog, setbreedItensForDog] = useState([
        { label: "Vira Lata", value: "vira lata" },
        { label: "Caramelo", value: "caramelo" },
        { label: "Chow chow", value: "chow chow" },
        { label: "Bull terrier", value: "bull terrier"},
        { label: "Cocker spaniel", value: "cocker spaniel" },
        { label: "Dogue alemão", value: "dogue alemao" },
        { label: "Husky siberiano", value: "husky siberiano" },
        { label: "Labrador retriever", value: "labrador retriever" },
    ]);

    const [breedItensForCat, setbreedItensForCat] = useState([
        { label: "Persa", value: "persa" },
        { label: "British Shorthair", value: "british shorthair" },
        { label: "Sphynx", value: "sphynx" },
        { label: "Siamês", value: "siames" },
        { label: "Angorá", value: "angora" },
        { label: "Maine Coon", value: "maine coon" },
        { label: "Himalaio", value: "himalaio" },
        { label: "Bengal", value: "bengal" },
        { label: "Abissínio", value: "abissinio" }
    ]);

    const onTypeOpen = useCallback(() => {
    setBreedOpen(false);
    }, []);

    const onBreedOpen = useCallback(() => {
    setTypeOpen(false);
    }, []);

    //valida qual tipo de pet o usuário selecionou e 
    //retorna um objeto do tipo gato ou cachorro
    breedForType = () => {
        
        //se for do tipo cachorro set para itens do tipo cachorro
        if (state.type == typeItems[0].value){
            setBreedItems(breedItensForDog)
            return breedItems;
        } else {
            setBreedItems(breedItensForCat)
            return breedItems;
        }
    }

    register = () => {
        try {
            fetch(`${server}/pet`, {
                method: 'POST',
                body: JSON.stringify({
                    id: props,
                    name: state.name,
                    breed: state.breed,
                    category: state.type
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then((response) => response.json())
            .then((json) => console.log(json),
                setState({...initialState})
            )
            .catch(json => {
                showError(json);
            })
           
        } catch(err){
            showError(err)
        }
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
                onChangeText={cAge => setState(prevState =>({...prevState, age: cAge}))}/>

                

                <View style={styles.dropDown}>
                {/* <DropDownPicker
                    open={openTypes}
                    value={valueTypes}
                    items={itemsType}
                    setOpen={setOpenTypes}
                    setValue={setValueTypes}
                    setItems={setItemsType}
                    theme="LIGHT"
                    multiple={true}
                    mode="BADGE"
                    autoScroll={true}
                    placeholder="Tipo"
                    defaultIndex={0}
                    containerStyle={{height: 40}}
                    onChangeValue={itemsType => console.log(itemsBreed.label, itemsBreed.value)}
                    badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76f51", "#8ac926", "#00b4d8", "#e9c46a"]} 
                    /> */}

                    <DropDownPicker
                        placeholder="Selecione o tipo"
                        open={typeOpen}
                        value={typeValue}
                        items={typeItems}
                        setOpen={setTypeOpen}
                        setValue={setTypeValue}
                        setItems={setTypeItems}
                        onChangeValue={(value) => setState(prevState=> ({...prevState, type: (value.toString())}))}
                        onOpen={onTypeOpen}
                    />
                </View>
                <View style={styles.dropDown}>
                    <DropDownPicker
                        placeholder="Selecione a raça"
                        open={breedOpen}
                        value={breedValue}
                        items={breedItems}
                        setOpen={setBreedOpen}
                        setValue={setbreedValue}
                        onPress={breedForType}
                        setItems={setBreedItems}
                        onChangeValue={(value) => setState(prevState=> ({...prevState, breed: (value.toString())}))}
                        onOpen={onBreedOpen}
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