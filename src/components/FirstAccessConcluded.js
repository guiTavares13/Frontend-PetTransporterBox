import { View, Text, StyleSheet, Button } from "react-native";

import logo from '../assets/icons/logo_icon.png'

export default function FirstAccessConcluded(){
    return(
        <View style={styles.containerInitial}>
            <Image source={logo}  style={styles.logo}/>
            <Text>Prontinho</Text>
            <Text style={styles.buttonAccess}>Agora vamos cuidar dos seus animaizinhos!</Text>
            <Button>Começar</Button>
            /*Ao concluir, acessar a tela de menu inicial*/
        </View> 
    );
}

const styles = StyleSheet.create({
    content: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }, 
    logo: {
        width: 300,
        height: 300,
        borderWidth: 2,
    }, 
    buttonAccess: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    }
})