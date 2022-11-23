import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  LogBox,
} from "react-native";
import { useState, useEffect } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import MapView, { Callout, Marker } from "react-native-maps";
import "sessionstorage";
import { showError, server } from "../../common";

export default (props) => {
  LogBox.ignoreLogs([
    "Non-serializable values were found in the navigation state",
  ]);
  var [
    initialState = {
      petId: "",
      latitude: -23.737824,
      latitudeDelta: 0.001,
      longitude: 0.001,
      longitudeDelta: 46.5834197,
    },
    setState,
  ] = useState();

  const [
    location = {
      latitude: -23.737824,
      latitudeDelta: 0.001,
      longitude: 0.001,
      longitudeDelta: 46.5834197,
    },
    setLocation,
  ] = useState();

  var [
    state = {
      ...initialState,
    },
    setState,
  ] = useState();

  useEffect(() => {
    listPet();
  }, []);

  // useEffect(() => {
    
  // }, [setTimeout(function() {
  //   window.location.reload(1);
  // }, 180000)])

  atualiza = () => {
    setTimeout(function() {
      setLocation({
        latitude: 59.8699531,
        latitudeDelta: 0.001,
        longitude: -117.0395263,
        longitudeDelta: 0.001,
      })
    }, 5000); // 3
  
  }
  
  // -------------- <Retorna Localização e preenche o MapView> ------------//

  getMeasure = () => {
    var responseGetMeasure;
    var sessionstorage = require("sessionstorage");
    var data = sessionstorage.getItem("token");
    data = data.replace('"', "").replace('"', "");

    if (data == null) {
      alert("Seu login expirou!");
      return;
    } else {
      console.log("OPAAA" + state.petId);
      try {
        fetch(`${server}/trip/:${state.tripId}`, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Authorization: "Bearer " + data,
          },
        })
          .then((response) => {
            return response.json();
          })
          .then((json) => {
            responseGetMeasure = json;
            console.log(responseGetMeasure);

            // const aux = [];

            // responseGetMeasure.forEach((element) => {
            //   aux.push({
            //     latitude: element.latitude,
            //     longitude: element.longitude,
            //   });
            // });

            // //atualiza os pontos no mapa
            // setLocation(aux);
          });
      } catch (err) {
        showError(err);
      }
    }
  };

  // -------------- </Retorna Localização e preenche o MapView> ------------//

  // ---------------------- <Lista Pets> --------------------------
  const [petsOpen, setPetsOpen] = useState(false);
  const [petsValue, setPetsValue] = useState([]);
  const [petsItems, setPetsItems] = useState([]);

  listPet = () => {
    var responseGetPets;
    var sessionstorage = require("sessionstorage");
    var data = sessionstorage.getItem("token");
    data = data.replace('"', "").replace('"', "");
    if (data == null) {
      alert("Seu login expirou!");
      return;
    } else {
      try {
        fetch(`${server}/pet`, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Authorization: "Bearer " + data,
          },
        })
          .then((response) => {
            return response.json();
          })
          .then((json) => {
            responseGetPets = json.pets;
            console.log("RECEBEU VALORES PET");
            console.log(responseGetPets);

            const aux = [];

            responseGetPets.forEach((element) => {
              aux.push({ value: element.pet_id, label: element.pet_nome });
            });

            setPetsItems(aux);
          });
      } catch (err) {
        showError(err);
      }
    }
  };

  //---------------------- </Lista Pets> --------------------------

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.dropDown}>
          <DropDownPicker
            placeholder="Selecione o pet"
            open={petsOpen}
            value={petsValue}
            items={petsItems}
            setOpen={setPetsOpen}
            setValue={setPetsValue}
            setItems={setPetsItems}
            onPress={atualiza}
            onChangeValue={(value) =>
              setState({
                petId: value
              })
            }
          />
        </View>

        <View>
          <MapView
            style={styles.map}
            region={location}
          >
            <Marker
              coordinate={location}
              pinColor="black"
            />
          </MapView>
          {/* <Callout>
                        <Text>Aqui</Text>
                    </Callout> */}
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  map: {
    marginTop: 10,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
  },
  dropDown: {
    marginTop: 50,
    width: "90%",
  },
});
