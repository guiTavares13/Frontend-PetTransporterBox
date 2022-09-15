import { Text, SafeAreaView } from "react-native";

import global from "../../global";
import FirstAccess from '../components/FirstAccess'

export default props =>{

    const firstAccess = true;
        return(
            <SafeAreaView style={global.container}>
              {firstAccess ? 
                <FirstAccess {...props}/> : false}
              
            </SafeAreaView>
        )
    }