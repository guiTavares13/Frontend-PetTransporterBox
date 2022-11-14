import React from "react";
import { View, Text, StyleSheet, Image, LogBox, TouchableOpacity} from "react-native";
import logoPet from '../../assets/icons/logo.png'

export default props => {

    LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

defineType = (param) => {
    if(param == '1'){
        return 'Cachorro'
    } else {
        return 'Gato'
    }
}

 console.log(props)
    return(
        // onPress={props.navigation.navigate('FirstAccess', {...props})} 
        <TouchableOpacity style={styles.container}>
            <View style={styles.pet}>
                <View style={styles.column}>
                    <Image style={{width:50, height:50}} source={logoPet}/>
                </View>
                <Text style={styles.nameComponent}>{props.pet_nome}</Text>
                <View style={styles.column}>
                    <Text>{defineType(props.pet_tipo)}</Text>
                    <Text>{props.pet_raca}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    }, 
    column: {
        alignItems: "center"
    },
    pet: {
        flexDirection: 'row',
        backgroundColor: '#FFF',
        borderRadius: 10,
        alignItems: "center",
        paddingVertical: 15,
        width: '100%',
        justifyContent: "space-around"
    }, 
})