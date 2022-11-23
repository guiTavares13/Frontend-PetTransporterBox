import React from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
  LogBox,
  StyleSheet,
} from "react-native";
import { useState, useCallback } from "react";
import global from "../../styles/global";
import { server, showError } from "../../common";
import AuthInput from "../Auth/AuthInput";
import DropDownPicker from "react-native-dropdown-picker";
import "sessionstorage";

export default (props) => {

  LogBox.ignoreLogs([
    "Non-serializable values were found in the navigation state",
  ]);
  var [
    initialState = {
      name: "",
      age: "",
      category: "",
      breed: "",
    },
    setState,
  ] = useState();

  var [
    state = {
      ...initialState,
    },
    setState,
  ] = useState();

  //------------------<Lista tipo de pet>----------------------------
  

  // listGetTypePet = () => {
  //   var responseGetTypePets;
  //   var sessionstorage = require("sessionstorage");
  //   var data = sessionstorage.getItem("token");
  //   data = data.replace('"', "").replace('"', "");

  //   if (data == null) {
  //     alert("Seu login expirou!");
  //   } else {
  //     try {
  //       fetch(`${server}/pet/types`, {
  //         method: "GET",
  //         headers: {
  //           "Content-type": "application/json",
  //           Authorization: "Bearer " + data,
  //         },
  //       })
  //       .then(response => {
  //         return response.json();
  //       })
  //       .then(json => {
  //         responseGetTypePets = json.types;          
  //         //setTypeItems(responseGetTypePets);
  //       })
  //     } catch (err) {
  //       showError(err);
  //     }
  //   }
  // }; 

  //------------------<Lista tipo de pet>----------------------------

  const [breedOpen, setBreedOpen] = useState(false);
  const [breedValue, setbreedValue] = useState([]);
  const [breedItems, setBreedItems] = useState([]);

  const [breedItensForDog, setbreedItensForDog] = useState([
    { label: "Vira Lata", value: "vira lata" },
    { label: "Caramelo", value: "caramelo" },
    { label: "Chow chow", value: "chow chow" },
    { label: "Bull terrier", value: "bull terrier" },
    { label: "Cocker spaniel", value: "cocker spaniel" },
    { label: "Dogue alemão", value: "dogue alemao" },
    { label: "Husky siberiano", value: "husky siberiano" },
    { label: "Labrador retriever", value: "labrador retriever" },
  ]);

  const [breedItensForCat, setbreedItensForCat] = useState([
    { label: "Persa", value: "persa" },
    { label: "British Shorthair", value: "british shorthair" },
    { label: "Sphynx", value: "sphynx" },
    { label: "Siamês", value: "siames" },
    { label: "Angorá", value: "angora" },
    { label: "Maine Coon", value: "maine coon" },
    { label: "Himalaio", value: "himalaio" },
    { label: "Bengal", value: "bengal" },
    { label: "Abissínio", value: "abissinio" },
  ]);

  const onTypeOpen = useCallback(() => {
    setBreedOpen(false);
  }, []);

  const onBreedOpen = useCallback(() => {
    setTypeOpen(false);
  }, []);

  const [typeOpen, setTypeOpen] = useState(false);
  const [typeValue, setTypeValue] = useState([]);
  const [typeItems, setTypeItems] = useState([
    { label: "Cachorro", value: "7b1a6160-63b5-11ed-81ce-0242ac120002" },
    { label: "Gato", value: "89059a10-63b5-11ed-81ce-0242ac120002" }
  ]);

  //valida qual tipo de pet o usuário selecionou e
  //retorna um objeto do tipo gato ou cachorro
  breedForType = () => {
    //se for do tipo cachorro set para itens do tipo cachorro
    if (state.category == typeItems[0].value) {
      console.log(typeItems[0].value);
      setBreedItems(breedItensForDog);
      setState((prevState) => ({ ...prevState, type: typeItems[0].value }));
      return breedItems;
    } else {
      console.log(typeItems[1].value)
      setBreedItems(breedItensForCat);
      setState((prevState) => ({ ...prevState, type: typeItems[1].value }));
      return breedItems;
    }
  };

  register = () => {
    var sessionstorage = require("sessionstorage");
    var data = sessionstorage.getItem("token");
    data = data.replace('"', "").replace('"', "");
    if (data == null) {
      alert("Seu login expirou!");
      return;
    }
    try {
      fetch(`${server}/pet`, {
        method: "POST",
        body: JSON.stringify({
          name: state.name,
          breed: state.breed,
          age: state.age,
          category: state.category
        }),
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + data,
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json),
        alert("Cadastrado com sucesso!"),
        setState({ ...initialState }))
    } catch (err) {
      showError(err);
    }
  };

  return (
    <SafeAreaView style={global.container}>
      <View>
        <Text style={styles.title}>Cadastrar Pet</Text>
      </View>
      <View style={styles.formContainer}>
        <AuthInput
          icon="paw"
          style={styles.input}
          placeholder="Nome do pet"
          value={state.name}
          onChangeText={(cName) =>
            setState((prevState) => ({ ...prevState, name: cName }))
          }
        />
        <AuthInput
          icon="recycle"
          style={styles.input}
          placeholder="Idade"
          value={state.age}
          onChangeText={(cAge) =>
            setState((prevState) => ({ ...prevState, age: cAge }))
          }
        />

        <View style={styles.dropDown}>
          <DropDownPicker
            placeholder="Selecione o tipo"
            open={typeOpen}
            value={typeValue}
            items={typeItems}
            setOpen={setTypeOpen}
            setValue={setTypeValue}
            setItems={setTypeItems}
            //onPress={listGetTypePet}
            onChangeValue={(value) =>
              setState((prevState) => ({
                ...prevState,
                category: value,
              }))
            }
            onOpen={onTypeOpen}
          />
        </View>
        <View style={styles.dropDown}>
          <DropDownPicker
            placeholder="Selecione a raça"
            open={breedOpen}
            value={breedValue}
            items={breedItems}
            setOpen={setBreedOpen}
            setValue={setbreedValue}
            onPress={breedForType}
            setItems={setBreedItems}
            onChangeValue={(value) =>
              setState((prevState) => ({
                ...prevState,
                breed: value,
              }))
            }
            onOpen={onBreedOpen}
          />
        </View>
      </View>
      <TouchableOpacity
        title="Button Access"
        style={styles.buttonRegister}
        onPress={register}
      >
        <Text style={styles.textButtonAccess}>Cadastrar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    margin: 30,
  },
  buttonRegister: {
    backgroundColor: "#2F80ED",
    borderRadius: 10,
    paddingLeft: 70,
    paddingRight: 70,
    paddingTop: 15,
    paddingBottom: 15,
    margin: 10,
  },
  formContainer: {
    backgroundColor: "rgba(0,0,0, 0.8)",
    padding: 20,
    width: "90%",
    borderRadius: 10,
  },
  button: {
    margin: 30,
    backgroundColor: "#2F80ED",
    borderRadius: 10,
    paddingLeft: 70,
    paddingRight: 70,
    paddingTop: 15,
    paddingBottom: 15,
  },
  input: {
    marginTop: 10,
    backgroundColor: "#FFF",
    borderRadius: 10,
    height: 40,
  },
  dateBirthBar: {
    flexDirection: "row",
    alignItems: "stretch",
  },
  dropDown: {
    marginTop: 10,
  },
});
