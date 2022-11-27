import React, { useState, useEffect, Component, setState } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  Pressable,
  TouchableHighlight,
  Alert,
} from "react-native";

import Monitor from "../components/Menu/Monitor";
import Registration from "../components/Menu/Registers";
import Historic from "../components/Menu/Historics";
import Footer from "../components/Parts/Footer";
import { server, showError } from "../common";
import logo from "../assets/icons/logo.png";
import petListLogo from '../assets/icons/listIcon.png'
import newPetIcon from '../assets/icons/plus-circle.png'

export default (props) => {
  var [
    initialState = {
      name: "",
      monitor: true,
      registration: false,
      historic: false,
    },
    setState,
  ] = useState();

  var [
    state = {
      ...initialState,
    },
    setState,
  ] = useState();

  var subtitle = defineSubtitle();

  toggleMonitor = () => {
    setState({ monitor: !state.monitor });
  };

  toggleRegistration = () => {
    setState({ registration: !state.registration });
  };

  toggleHistoric = () => {
    setState({ historic: !state.historic });
  };

  function defineSubtitle() {
    if (state.monitor) {
      return "Deseja monitorar seu pet?";
    } else if (state.registration) {
      return "Deseja cadastrar um pet novo ou uma viagem?";
    } else if (state.historic) {
      return "Deseja consultar algum histórico?";
    }
  }

  function defineRoute() {
    if (state.monitor) {
      return <Monitor {...props} />;
    } else if (state.registration) {
      return <Registration {...props} />;
    } else if (state.historic) {
      return <Historic {...props} />;
    }
  }

  var _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem("nome");
      if (value != null) {
        console.log(value);
        return value;
      } else {
        return null;
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.titleBar}>
            <Text style={styles.title}>
              Olá, {props.route.params.usuario_nome}
            </Text>
          </View>
          <View style={styles.titleImage}>
            <Image style={{ width: 50, height: 50 }} source={logo} />
          </View>
        </View>
        <View style={styles.subititle}>
          <Text>{subtitle}</Text>
        </View>
        <SafeAreaView style={styles.buttonsBar}>
          <View>
            {state.monitor ? (
              <TouchableHighlight
                title="Button Access"
                style={styles.buttonClicked}
                onPress={toggleMonitor}
              >
                <Text>Monitorar</Text>
              </TouchableHighlight>
            ) : (
              <TouchableHighlight
                title="Button Access"
                style={styles.buttonNonClicked}
                onPress={toggleMonitor}
              >
                <Text>Monitorar</Text>
              </TouchableHighlight>
            )}
          </View>
          <View>
            {state.registration ? (
              <TouchableHighlight
                title="Button Access"
                style={styles.buttonClicked}
                onPress={toggleRegistration}
              >
                <Text>Cadastrar</Text>
              </TouchableHighlight>
            ) : (
              <TouchableHighlight
                title="Button Access"
                style={styles.buttonNonClicked}
                onPress={toggleRegistration}
              >
                <Text>Cadastrar</Text>
              </TouchableHighlight>
            )}
          </View>
          <View>
            {state.historic ? (
              <TouchableHighlight
                title="Button Access"
                style={styles.buttonClicked}
                onPress={toggleHistoric}
              >
                <Text>Historicos</Text>
              </TouchableHighlight>
            ) : (
              <TouchableHighlight
                title="Button Access"
                style={styles.buttonNonClicked}
                onPress={toggleHistoric}
              >
                <Text>Historicos</Text>
              </TouchableHighlight>
            )}
          </View>
        </SafeAreaView>
      </SafeAreaView>
      <SafeAreaView style={styles.containerRoute}>{defineRoute()}</SafeAreaView>

      {/* <Footer {...props}/> */}

      <View style={styles.footer}>
        <View>
          <Image style={{ width: 20, height: 20 }} source={petListLogo} />
        </View>
        <View style={styles.listPetsFooter}>
          <Text
            onPress={() => props.navigation.navigate('PetList', {...props})}
          >
            Meus Pets
          </Text>
        </View>
        <View style={styles.logoFooter}>
          <Image style={{ width: 20, height: 20 }} source={newPetIcon} />
        </View>
        <View style={styles.newPetFooter}>
          <Text
            onPress={() =>
              props.navigation.navigate("PetRegister", { ...props })
            }
          >
            Novo Pet
          </Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3EDFD5",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch",
  },
  titleBar: {
    flex: 2,
    justifyContent: "flex-end",
    padding: 30,
    marginTop: 20,
  },
  titleImage: {
    flex: 2,
    padding: 30,
    marginTop: 20,
    alignItems: "flex-end",
  },
  title: {
    fontSize: 30,
  },
  subititle: {
    alignItems: "flex-start",
    padding: 20,
  },
  buttonsBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch",
    margin: 40,
  },
  buttonClicked: {
    backgroundColor: "#32B768",
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonNonClicked: {
    backgroundColor: "#F5FAF7",
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  containerRoute: {
    flex: 1,
    backgroundColor: "#fff",
  },
  footer: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  listPetsFooter: {
    paddingRight: 30,
    paddingLeft: 10,
  },
  logoFooter: {
    paddingLeft: 30,
  },
  newPetFooter: {
    paddingLeft: 10,
  },
});
