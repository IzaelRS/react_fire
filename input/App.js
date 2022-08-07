import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import firebase from './src/firebaseConnection';

//tirar aviso yellowbox
console.disableYellowBox = true;


export default function App() {

  const [nome, setNome] = useState('Carregando...');
  const [idade, setIdade] = useState('');

  useEffect(() => {

    async function dados() {

      //criando um nó
      //await firebase.database().ref('tipo').set('cliente');

      //removendo um nó
      //await firebase.database().ref('tipo').remove();

      //crindo um novo child dentro de um nó
      //await firebase.database().ref('usuarios').child(3).set({
      //nome: 'Patricia',
      //cargo: 'Assistente RH'
      //});


      //await firebase.database().ref('usuarios').child(3)
      //.update({
      //nome: 'Patricia teixeira Reis'
      //});




      //pegando mais valores
      //await firebase.database().ref('usuarios/1').on('value', (snapshot) => {
      //setNome(snapshot.val().name);
      //setIdade(snapshot.val().idade);
      //});

      // on = olheiro database //fica olhando direto o dado
      //await firebase.database().ref('usuarios/1/name').on('value', (snapshot) => {
      //  setNome(snapshot.val());
      //});

      //once = olha somente uma unica vez 
      //await firebase.database().ref('nome').once('value', (snapshot) => {
      //setNome(snapshot.val());
      //});
    }

    dados();

  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}> Olá {nome} </Text>
      <Text style={styles.text}> Você tem  {idade} anos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25
  },
  text: {
    fontSize: 25
  }
})