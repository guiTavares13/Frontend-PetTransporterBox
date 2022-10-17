import { Text, SafeAreaView, Image } from "react-native";

import global from "../../global";
import Welcome from "../components/Welcome";

export default props =>{
        return(
            <SafeAreaView style={global.container}>
                <Welcome {...props}/>
            </SafeAreaView>
        )
    }