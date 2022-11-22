import React from "react";
import { Text, View, StyleSheet, Dimensions, SafeAreaView } from "react-native";
import { useState, useCallback, useEffect } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import MapView, { Callout, Marker } from "react-native-maps";
import "sessionstorage";
import { showError, server } from "../../common";

export default (props) => {
  var [
    initialState = {
      tripId: "",
      date: "",
      openDoor: "",
      petState: "",
    },
    setState,
  ] = useState();

  const [location = {
    latitude: '',
    longitude: ''
  }, setLocation] = useState();

  var [
    state = {
      ...initialState,
    },
    setState,
  ] = useState();

  useEffect(() => {
    getMeasure();
  }, [])

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
      try {
        fetch(`${server}/measure/:${tripId}`, {
          method: "GET",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => {
            return response.json();
          })
          .then((json) => {
            responseGetMeasure = json.measure;
            console.log(responseGetMeasure);

            const aux = [];

            responseGetMeasure.forEach(element => {
              aux.push({ latitude: element.latitude, longitude: element.longitude })
            })

            //atualiza os pontos no mapa
            setLocation(aux);
          });
      } catch (err) {
        showError(err);
      }
    }
  };

  // -------------- </Retorna Localização e preenche o MapView> ------------//

  // ---------------------- <Lista Pets> --------------------------
  const [tripsOpen, setTripsOpen] = useState(false);
  const [tripsValue, setTripsValue] = useState([]);
  const [tripsItems, setTripsItems] = useState([]);

  getListTrips = () => {
    var responseGetListTrips;
    var sessionstorage = require("sessionstorage");
    var data = sessionstorage.getItem("token");
    data = data.replace('"', "").replace('"', "");

    if (data == null) {
      alert("Seu login expirou!");
      return;
      return;
    } else {
      try {
        fetch(`${server}/trip/`, {
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
            responseGetListTrips = json.trips;
            console.log("RECEBEU VALORES TRIP")
            console.log(responseGetListTrips);

            const aux = [];

            responseGetListTrips.forEach(element => {
              aux.push({ label: element.id, value: element.pet_id })
            });
            setTripsItems(tripsItems);
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
        {tripsItems.lentgh > 0 && (
          <View style={styles.dropDown}>
            <DropDownPicker
              placeholder="Selecione a viagem"
              open={tripsOpen}
              value={tripsValue}
              items={tripsItems}
              setOpen={setTripsOpen}
              setValue={setTripsValue}
              setItems={setTripsItems}
              onPress={getListTrips}
              onChangeValue={(value) =>
                setState((prevState) => ({
                  ...prevState,
                  tripId: value.id.toString(),
                }))
              }
            />
          </View>
        )}

        <View>
          <MapView
            style={styles.map}
            region={{
              latitude: state.location.latitude,
              longitude: state.location.longitude,
            }}
          >
            <Marker
              coordinate={{
                latitude: state.location.latitude,
                longitude: state.location.longitude,
              }}
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
  })
