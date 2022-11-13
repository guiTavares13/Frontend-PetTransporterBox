import React from "react";
import { Text, View, StyleSheet } from 'react-native'
import { useState } from "react";
import FontAwesome5Icons from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontistoIcons from 'react-native-vector-icons/Fontisto';
import OcticonsIcons from 'react-native-vector-icons/Octicons';

export default props => {

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

    // ---------------------- <Busca o estado conforme o pet> --------------------------
    const [stateItems, setStateItems] = useState([]);

    getState = () => {
        try {
            fetch(`${server}/state/`, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then((response) =>{
                setStateItems(response);
            })
        
        } catch(err){
            showError(err)
        }
    }
    //---------------------- </Busca o estado conforme o id pet> --------------------------

    // ------------- <Busca a leitura conforme id da leitura retornada no estado> ---------------
    const [measeureItems, setMeasureItems] = useState([]);

    getMeasure = () => {
        try {
            fetch(`${server}/measure/:${measureId}`, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then((response) =>{
                setMeasureItems(response);
            })
        
        } catch(err){
            showError(err)
        }
    }
    //---------- </Busca a leitura conforme id da leitura retornada no estado> -------------------

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
        <>
            <View style={styles.container}>
                <View style={styles.petStateContainer}>
                    <View style={styles.dataPetContainer}>
                        <View style={styles.line}>
                            <Text>Nome</Text>
                            <Text>Tobias</Text>
                            <Text>{petType}</Text>
                        </View>
                        
                        <View style={styles.line}>
                            <Text>Tipo</Text>
                            <Text>Cachorro</Text>
                            <Text>{dogIcon}</Text>
                        </View>

                        <View style={styles.line}>
                            <Text>Raça</Text>
                            <Text>Caramelo</Text>
                            <Text>{breedIcon}</Text>
                        </View>
                        
                        <View style={styles.line}>
                            <Text>Idade</Text>
                            <Text>2 anos</Text>
                            <Text>{yearsOldIcon}</Text>
                        </View>
                    </View>

                    <View style={styles.dataMeasurePetContainer}>
                        <View style={styles.line}>
                            <Text>Ultima leitura</Text>
                            <Text>19/09/2022</Text>
                            <Text>{dateIcon}</Text>
                        </View>
                        <View style={styles.line}>
                            <Text>Porta Aberta</Text>
                            <Text>Não</Text>
                            <Text>{checkDoor}</Text>
                        </View>
                        <View style={styles.line}>
                            <Text>Possui viagem</Text>
                            <Text>Sim</Text>
                            <Text>{tripIcon}</Text>
                        </View>
                        <View style={styles.line}>
                            <Text>Caixa</Text>
                            <Text>Caixa Grande 01</Text>
                            <Text>{boxIcon}</Text>
                        </View>
                    </View>
                    <View style={styles.dataStatePetContainer}>
                        <View style={styles.line}>
                            <Text>Estado do pet</Text>
                            <Text>Agitado</Text>
                            <Text>{stateIcon}</Text>
                        </View>
                        <View style={styles.line}>
                            <Text>Temperatura</Text>
                            <Text>24ºC</Text>
                            <Text>{tempIcon}</Text>
                        </View>
                        <View style={styles.line}>
                            <Text>Localização</Text>
                            <Text>LA: 37.78825
                            LO: -122.4324</Text>
                            <Text>{locationIcon}</Text>
                        </View>
                    </View>
                </View>
            </View>
            </>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
    },
    containerButtons: {
        flexGrow: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    line: {
        flexDirection: 'row',
        alignItems: "center",
        width: '100%',
        justifyContent: "space-between",
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    petStateContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
    }, 
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },  
    dataPetContainer: {
        marginTop: 10,
        alignItems: "center",
        width: '90%',
        backgroundColor: '#FFF',
        borderRadius: 10,
        alignItems: "center",
        paddingVertical: 15,
        justifyContent: "space-around"
    },
    dataStatePetContainer: {
        marginTop: 10,
        alignItems: "center",
        width: '90%',
        backgroundColor: '#FFF',
        borderRadius: 10,
        alignItems: "center",
        paddingVertical: 15,
        justifyContent: "space-around"
    },
    dataMeasurePetContainer: {
        marginTop: 10,
        alignItems: "center",
        width: '90%',
        backgroundColor: '#FFF',
        borderRadius: 10,
        alignItems: "center",
        paddingVertical: 15,
        justifyContent: "space-around"
    }
})