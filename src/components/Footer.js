import { View, Text, StyleSheet, Image  } from "react-native";

import petListLogo from '../assets/icons/listIcon.png'
import newPetIcon from '../assets/icons/plus-circle.png'

export default props => {

    return(
        <View style={styles.container}>
            <View>
                <Image style={{width:20, height:20}} source={petListLogo}/>
            </View>
            <View style={styles.listPets}>
                <Text onPress={() => props.navigation.navigate('PetList', {...props})}>Meus Pets</Text>
            </View>
            <View style={styles.logo}>
                <Image style={{width:20, height:20}} source={newPetIcon}/>
            </View>
            <View style={styles.newPet}>
                <Text onPress={() => props.navigation.navigate('PetRegister', {...props})}>Novo Pet</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0.1,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
    },
    listPets:{
        paddingRight: 30,
        paddingLeft: 10,
    }, 
    logo: {
        paddingLeft: 30
    },
    newPet: {
        paddingLeft: 10
    }
})