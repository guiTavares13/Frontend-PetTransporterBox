import { View, Text, Image, StyleSheet } from "react-native";

import global from "../../styles/global";

export default function Header() {
    return(
        <>
        <View style={global.container}>
            <View>
                <Text>Olá "NOME"</Text>
            </View>
            <View>
                <Image source={'foto_do_usuario'}/>
            </View>
        </View>
        </>
    );
}
