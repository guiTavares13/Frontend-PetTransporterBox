import { Alert, Platform } from 'react-native'

//https://pelagic-pager-365719.rj.r.appspot.com/api/v1
//http://192.168.15.4:3000/api/v1

const server = Platform.OS === 'ios' 
    ? 'https://pelagic-pager-365719.rj.r.appspot.com/api/v1' : 'https://pelagic-pager-365719.rj.r.appspot.com/api/v1'

function showError(err) {
    Alert.alert('Ops! Ocorreu um problema!', `Mensagem: ${err}`)
}

function showSucess(msg) {
    Alert.alert('Sucesso!', msg)
}

export {server, showError, showSucess}