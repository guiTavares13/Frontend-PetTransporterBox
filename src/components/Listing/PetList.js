import React from "react";
import { StyleSheet, Text, SafeAreaView, FlatList } from "react-native";
import { useState, useEffect } from "react";
import Pet from "./Pet";
import "sessionstorage";
import BtnVisualizeAll from "../Parts/BtnVisualizeAll";
import { server, showError, showSucess } from "../../common";

export default (props) => {
  // var [
  //   state = {
  //     pets: [
  //       {
  //         id: Math.random(),
  //         name: "Tobias",
  //         type: "Dog",
  //       },
  //       {
  //         id: Math.random(),
  //         name: "Pukimon",
  //         type: "Cat",
  //       },
  //     ],
  //   },
  //   setState,
  // ] = useState();

  // precisa chamar a classe que lista usuário com pet => tb_pet_x_usuario
  // ------------------------- Listagem dos pets ---------------
  const [petsItems, setPetsItems] = useState([]);

  useEffect(() => {
    var sessionstorage = require("sessionstorage");
    var data = sessionstorage.getItem("token");
    data = data.replace('"', "").replace('"', "");
    try {
      if (data == null) {
        alert("Seu login expirou!");
      } else {
        fetch(`${server}/pet`, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Authorization: "Bearer " + data,
          },
        })
        .then((response) => response.json())
        .then((json) => console.log(json), setPetsItems(response))
       
        //   console.log(response.json())
        //   setPetsItems(response.json());
        //   //console.log(petsItems);
        // });
      }
    } catch (err) {
      showError(err);
    }
    
  }, []);

  // ------------------------- Listagem dos pets --------------

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Todos os seus pets</Text>
        <FlatList
          style={styles.pet}
          data={petsItems}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item }) => <Pet {...item} />}
        />
        <BtnVisualizeAll />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 30,
  },
  title: {
    fontSize: 20,
    margin: 15,
  },
  pet: {
    width: "90%",
  },
});
