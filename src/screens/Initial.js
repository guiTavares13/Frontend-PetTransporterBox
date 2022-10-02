import { Text, SafeAreaView, Image } from "react-native";

import global from "../../global";
import FirstAccess from '../components/FirstAccess'

import logo from '../assets/icons/logo_icon.png'
import Welcome from "../components/Welcome";

export default props =>{

    const firstAccess = true;
        return(
            <SafeAreaView style={global.container}>
                <Welcome {...props}/>
            </SafeAreaView>
        )
    }