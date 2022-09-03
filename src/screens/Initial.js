import { View, Text } from "react-native";

import global from "../../global";

export default function Initial() {

    const firstAccess = true;

    return(
        //se for primeiro acesso, entrar no componente FirstAccess
        <>
        <View style={global.container}>
            <Text>Tela inicial. Contem a splash, Access1 e Access2</Text>
        </View>
        
        
       </>
    );
}
