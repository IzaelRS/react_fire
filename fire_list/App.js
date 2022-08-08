import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Keyboard,
  FlatList,
  ActivityIndicator
} from "react-native";

import Listagem from './src/Listagem';

import firebase from './src/firebaseConnection';


export default function App() {


  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function dados() {

      await firebase.database().ref('usuarios').on('value', (snapshot) => {
        setUsuarios([]);// comando para zerar o array

        // funcao para fazer uma lista
        snapshot.forEach((chilItem) => {

          // mostrando a lista
          let data = {
            key: chilItem.key,
            nome: chilItem.val().nome,
            cargo: chilItem.val().cargo
          };

          //colocando dentro do setUsuarios
          setUsuarios(velhaLista => [...velhaLista, data].reverse());

        })

        setLoading(false);

      })
    }

    dados();

  }, []);

  async function cadastrar() {
    //verificar se foi digitado algo 
    if (nome !== '' & cargo !== '') {

      //criacao de veriaveis para dar o push no database
      let usuarios = await firebase.database().ref('usuarios');
      let chave = usuarios.push().key;

      //comando para push
      usuarios.child(chave).set({
        nome: nome,
        cargo: cargo,
      });


      //verificando
      alert('Cadastrado com sucesso!');

      //limpando o campo
      setNome('');
      setCargo('');
      Keyboard.dismiss(); // fechar o teclado

    }
  }

  return (


    <View style={styles.container}>

      <StatusBar backgroundColor="#454342" barStyle="light-content" />



      <Text style={styles.texto}> Nome </Text>
      <TextInput
        style={styles.input}
        keyboardType={'twitter'}// tipo de teclado
        underlineColorAndroid="transparent"
        onChangeText={(texto) => setNome(texto)}
        value={nome} // limpa o campo

      />


      <Text style={styles.texto}> Cargo </Text>
      <TextInput
        style={styles.input}
        keyboardType={'twitter'}// tipo de teclado
        underlineColorAndroid="transparent"
        onChangeText={(texto) => setCargo(texto)}
        value={cargo} //limpa ocampo
      />


      <TouchableOpacity style={styles.btn} onPress={cadastrar} >
        <Text style={styles.btnTx}> Novo Funcionário </Text>
      </TouchableOpacity>

      {loading ?
        (
          <ActivityIndicator color="#45445" size={45} />
        ) :
        (
          <FlatList
            // pegando a key de cada item
            keyExtractor={item => item.key}
            // pegando o dados
            data={usuarios}
            // renderizando 
            renderItem={({ item }) => (<Listagem data={item} />)}
          />
        )
      }



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#454342'
  },
  texto: {
    fontSize: 20,
    color: '#a2a1a0',
  },
  input: {
    margin: 10,
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#1ee9a4',
    height: 50,
    fontSize: 17,
    borderRadius: 7,
    color: '#b2b2b2'
  },
  btn: {
    borderRadius: 7,
    width: '100%',
    justifyContent: "center",
    marginTop: 50,
    padding: 10,
    backgroundColor: '#1ee9a4',
    alignItems: 'center',

  },
  btnTx: {
    color: '#404040',
    fontWeight: 'bold',
    fontSize: 20

  }
})

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
      //nome: 'Patricia Reis'
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