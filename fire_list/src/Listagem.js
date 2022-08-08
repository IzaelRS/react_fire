import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Listagem({ data }) {
     return (
          <View style={styles.container}>
               <Text style={styles.txn}>{data.nome}</Text>
               <Text style={styles.txc}>{data.cargo}</Text>
          </View>
     );
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          marginTop: 10,
          marginBottom: 5,
          padding: 10,
          backgroundColor: '#a0a0a0',
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2,
          borderColor: '#add580',
     },
     txn: {
          fontSize: 20,
          fontWeight: 'bold'
     },
     txc: {
          fontSize: 18,
          textAlign: 'center'
     }
});