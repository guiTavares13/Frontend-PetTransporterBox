import { Alert, Platform } from 'react-native'

const server = Platform.OS === 'ios' 
    ? 'http://192.168.15.4:3000/api/v1' : 'http://192.168.15.4:3333/api/v1'

function showError(err) {
    Alert.alert('Ops! Ocorreu um problema!', `Mensagem: ${err}`)
}

function showSucess(msg) {
    Alert.alert('Sucesso!', msg)
}

export {server, showError, showSucess}