import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import { useState, useCallback, useEffect } from "react";
import DropDownPicker from 'react-native-dropdown-picker';
import FontAwesome5Icons from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontistoIcons from 'react-native-vector-icons/Fontisto';
import OcticonsIcons from 'react-native-vector-icons/Octicons';

import PetInfo from "./PetInfo";

export default props => {

    console.log("Entrou " + props)

    var [initialState ={
        pet: [{
            petId: '',
            name: '',
            age: '',
            type: '',
            breed: ''
        }]
    }, setState] = useState()

    var [state = {
        ...initialState
    }, setState] = useState()

    // ---------------------- <Lista Pets> --------------------------
    const [petsOpen, setPetsOpen] = useState(false);
    const [petsValue, setPetsValue] = useState([]);
    const [petsItems, setPetsItems] = useState([]);

    const onPetsOpen = useCallback(() => {
        setPetsOpen(false);
    }, []);

    listPets = () => {
        try {
            fetch(`${server}/pet/`, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then((response) =>{
                setPetsItems(response);
            })
        
        } catch(err){
            showError(err)
        }
    }
    //---------------------- </Lista Pets> --------------------------

    //---------------------- <Lista as medidas> --------------------------
    useEffect(() => {
        getMeasure = () => {
          var responseGetMeasure;
          var sessionstorage = require("sessionstorage");
          var data = sessionstorage.getItem("token");
          data = data.replace('"', "").replace('"', "");
    
          if (data == null) {
            alert("Seu login expirou!");
            return;
          } else {
            try {
              fetch(`${server}/measure/:${tripId}`, {
                method: "GET",
                headers: {
                  "Content-type": "application/json; charset=UTF-8",
                },
              })
                .then((response) => {
                  return response.json();
                })
                .then((json) => {
                  responseGetMeasure = json.measure;
                  console.log(responseGetMeasure);
                  setState({responseGetMeasure});
                });
            } catch (err) {
              showError(err);
            }
          }
        };
      }, [state.tripId != ""]);
    //---------------------- </Lista as medidas> ----------------------

    //---------------------- <Icones> --------------------------------
    const petType = <MaterialIcons name='pets' size={20} />
    const dogIcon = <FontAwesome5Icons name="dog" size={20} />
    const breedIcon = <FontistoIcons name="blood-drop" size={20}/>
    const yearsOldIcon = <OcticonsIcons name='number' size={20}/>
    const dateIcon = <FontistoIcons name="date" size={20}/>
    const checkDoor = <FontAwesome5Icons name='check-circle' size={20} />
    const tripIcon = <FontAwesome5Icons name="route" size={20}/>
    const boxIcon = <FontAwesome5Icons name="dropbox" size={20}/>
    const stateIcon = <MaterialIcons name="sick" size={20} />
    const tempIcon = <FontAwesome5Icons name="temperature-high" size={20} />
    const locationIcon = <FontAwesome5Icons name="map-marker-alt" size={20}/>
    //---------------------- </Icones> --------------------------------

    return(
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.dropDown}>
                    <DropDownPicker
                        placeholder="Escolha o pet"
                        open={petsOpen}
                        value={petsValue}
                        items={petsItems}
                        setOpen={setPetsOpen}
                        setValue={setPetsValue}
                        setItems={setPetsItems}
                        onPress={listPets}
                        onChangeValue={(value) => setState(prevState=> ({...prevState, pet: (value.toString())}))}
                        onOpen={onPetsOpen}
                    />
                </View>
                <Text style={styles.title}>Estado do pet</Text>
                <View>
                    <PetInfo/>
                </View>
                
            </View>
            <View style={styles.containerButtons}>
                <TouchableOpacity 
                        title="Editar" 
                        style={styles.button}
                        //onPress={register}
                        >
                        <Text style={styles.textButton}>
                            Editar
                        </Text>
                </TouchableOpacity>
            </View>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    containerButtons: {
        flexGrow: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    button:{
        backgroundColor: '#2F80ED',
        borderRadius: 10,
        margin: 30,
        width: '20%',
        alignItems: "center",
        paddingVertical: 10
    },
    line: {
        flexDirection: 'row',
        alignItems: "center",
        width: '100%',
        justifyContent: "space-between",
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    title: {
        margin: 20,
        fontSize: 20
    },
    dropDown: {
        marginTop: 50,
        width: '90%'
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },  
})