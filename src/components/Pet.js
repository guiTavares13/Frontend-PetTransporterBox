import React from "react";
import { View, Text, StyleSheet, Image, LogBox, TouchableOpacity} from "react-native";
import logoPet from '../assets/icons/logo.png'

export default props => {

    LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

 console.log(props)
    return(
        // onPress={props.navigation.navigate('FirstAccess', {...props})} 
        <TouchableOpacity style={styles.container}>
            <View style={styles.pet}>
                <View>
                    <Image style={{width:50, height:50}} source={logoPet}/>
                </View>
                <Text style={styles.nameComponent}>{props.name}</Text>
                <Text>{props.type}</Text>
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