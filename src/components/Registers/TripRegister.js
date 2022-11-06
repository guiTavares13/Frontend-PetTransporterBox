import React from "react";
import { SafeAreaView, TouchableOpacity, Text, View, Image, TextInput, StyleSheet, Platform} from 'react-native'
import { useState } from "react";
import global from '../../../global'
import {server, showError} from '../../common'
import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import DropDownPicker from 'react-native-dropdown-picker';
import calendarIcon from '../../assets/icons/calendar.png'

export default props => {

    var [initialState ={
        petId: '',
        boxId: '',
        date: '',
    }, setState] = useState()


    var [state = {
        ...initialState
    }, setState] = useState()

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(['italy', 'spain', 'barcelona', 'finland']);
    const [items, setItems] = useState([
        // {label: 'Spain', value: 'spain'},
        // {label: 'Madrid', value: 'madrid', parent: 'spain'},
        // {label: 'Barcelona', value: 'barcelona', parent: 'spain'},
        // {label: 'Italy', value: 'italy'},
        // {label: 'Rome', value: 'rome', parent: 'italy'},
        // {label: 'Finland', value: 'finland'}
    ]);


    const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
    setState({dataNascimento: fDate})
    };

    const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
        value: date,
        onChange,
        mode: currentMode,
        is24Hour: true,
    });};

    const showDatepicker = () => {
    setState({dateTimeShow: !state.dateTimeShow});
    showMode('date');
    };
    

    register = () => {
        try {
            fetch(`${server}/pet`, {
                method: 'POST',
                body: JSON.stringify({
                    petId: state.petId,
                    caixaID: state.name,
                    date: state.date
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

    return (
        <SafeAreaView style={global.container}>
            <View>
                <Text style={styles.title}>Cadastrar Viagem</Text>
            </View>
            <View>
                <DropDownPicker
                    style={styles.dropDown}
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    theme="DARK"
                    multiple={true}
                    mode="BADGE"
                    placeholder="Selecione o pet"
                    badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76f51", "#8ac926", "#00b4d8", "#e9c46a"]}/>

                <DropDownPicker
                    style={styles.dropDown}
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    theme="DARK"
                    multiple={true}
                    mode="BADGE"
                    placeholder="Selecione a caixa"
                    badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76f51", "#8ac926", "#00b4d8", "#e9c46a"]}/>

                <View style={styles.dateBirthBar}>
                <Text>{state.dataNascimento}</Text>
                    <TouchableOpacity 
                        title="" onPress={showDatepicker}
                        style={styles.btnAvancar}>
                        <Image style={{width:30, height:30}}
                            source={calendarIcon}/>
                    </TouchableOpacity> 
                    {state.dateTimeShow &&
                        <DateTimePicker value={date} title="Show date picker!" />
                    }
                </View>
            </View>

            <TouchableOpacity 
                    title="Salvar" 
                    style={styles.button}
                    onPress={register}>
                    <Text style={styles.textButton}>
                        Salvar
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
    button:{
        backgroundColor: '#2F80ED',
        borderRadius: 10,
        paddingLeft: 70,
        paddingRight: 70,
        paddingTop: 15,
        paddingBottom: 15,
        margin: 30
    },
    dropDown: {
        width: '70%',
        margin: 10
    },
    dateBirthBar: {
        flexDirection: "row",
        alignItems: 'stretch',
    }, 
    
})