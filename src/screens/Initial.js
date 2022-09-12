import { Text, SafeAreaView } from "react-native";

import global from "../../global";

import Splash from "../components/Splash"

export default function Initial(){

const firstAccess = true;

    return(
        <SafeAreaView style={global.container}>
            {firstAccess &&
                <Splash/> 
            }
    </SafeAreaView>
    )
}