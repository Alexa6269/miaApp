import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const onHandlerChange = (text)=> {
    setTask (text)
  };
  const onHandlerSubmit = () =>{
    setTasks([
      ...tasks,
      {
        id: Math.random().toString(),
        value : task
      }
    ]);
    setTask('');
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} 
        placeholder='Añadir nueva tarea'
        autoComplete='off'
        autoCorrect = {false}
        value={task}
        onChangeText = {onHandlerChange}
        />
        <Button disabled = {!task} title='Add' color='#FA9938' onPress = {onHandlerSubmit}/>
      </View>
      <View style = {styles.listContainer}>
        {
          tasks.map((item)=>(
            <View style = {styles.itemContainer}>
          <Text style = {styles.itemList} key={item.id}>{item.value}</Text>
          </View>))
        }
      </View>
    </View>
  );
};

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

  },
  listContainer:{
    marginHorizontal:50,
    
  },
  itemContainer:{
    flexDirection : 'row',
    justifyContent :'space-between',
    alignItems: 'center',
    padding:10,
    backgroundColor:'#E7EAEE',
    marginBottom:10,
    borderRadius:10,
    
  },
  itemList:{
    fontSize: 14,
    color: '',
    fontWeight:'bold'
  }
});
