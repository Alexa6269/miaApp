import { Botton, Button, StyleSheet, Text, TextInput, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder='Añadir nueva tarea'/>
        <Button title='Añadir' color='#FA9938'/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  inputContainer:{
    margin: 50,
    marginHorizontal:20,
    flexDirection:'row',
    justifyContent: 'space-around'
  },
  input:{
    width: '75%',
    borderBottomColor:'#A52742',
    borderBottomWidth:1 ,
    height:40,

  }
});
