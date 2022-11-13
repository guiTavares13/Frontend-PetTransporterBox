import React from "react";
import { Text, View, StyleSheet, Dimensions, SafeAreaView } from 'react-native'
import { useState, useCallback } from "react";
import DropDownPicker from 'react-native-dropdown-picker';
import MapView, { Callout, Marker } from 'react-native-maps';

export default props => {

    var [initialState ={
        localizacao_pet_id: '',
        latitude: '',
        longitude: '',
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

    // -------------- <Retorna Localização e preenche o MapView> ------------//
    const [locationTripItems, setLocationTriptems] = useState([]);

        getPositionTrip = () => {
            try {
                fetch(`${server}/trip/:${tripId}`, {
                    method: 'GET',
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                .then((response) =>{
                    setLocationTriptems(response);
                  })
            } catch(err){
                showError(err)
            }
        }
    // -------------- </Retorna Localização e preenche o MapView> ------------//

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
                <View>
                    <MapView style={styles.map} 
                        region={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}>
                        <Marker
                        coordinate={{
                            latitude: 37.78825,
                            longitude: -122.4324
                        }}
                        pinColor='black'
                        />
                    </MapView>
                    {/* <Callout>
                        <Text>Aqui</Text>
                    </Callout> */}
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    map: {
        marginTop: 10,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        borderTopEndRadius: 10,
        borderTopStartRadius: 10
    }, 
    dropDown: {
        marginTop: 50,
        width: '90%'
    }
})