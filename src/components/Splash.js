import { View, Text, Image, StyleSheet } from "react-native";

//import global from './global';
import logo from '../assets/icons/logo_icon.png'

export default function Splash() {
    return(
        <View style={styles.container}>
            <Image source={logo}  style={styles.logo}/>
            <Text>Caixa Pet</Text>
        </View>
    );
}

//se for primeiro acesso, entrar no componente FirstAccess

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    logo: {
        width: 300,
        height: 300,
        borderWidth: 2,
    }
})