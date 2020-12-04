import React, {useState} from 'react';
import { Text, View, StyleSheet, FlatList, TextInput, Button, ToastAndroid, TouchableWithoutFeedback} from 'react-native';
import Header from './Header';


export default function TodoListScreen({navigation}) {
    const [tasks, setTasks] = useState([{
        id: 1,
        text: 'baciti smece'
      }, {
        id: 2,
        text: 'oprati sude'
      }]);

    const[text, setText] = useState('');


    const changeHandler = (text) => {
        setText(text)
    }
    
      const addTask = (text) => {
        if(text.length == 0) {
          console.log('empty');
          Alert.alert('UPS', 'Morate upisati zadatak', [
            {
              text: 'Ok',
              onPress: ()=> console.log('close alert')
            }
          ]);
        } 
        else 
        {
          var index;
          var id;
    
          if(tasks.length !== 0) {
            index = tasks.length-1;
            id = tasks[index].id;
            setTasks((prevTasks) => {
              return [
                ...prevTasks,
                { id: ++id, text: text}
              ]
            });
            ToastAndroid.show('Zadatak dodan',ToastAndroid.SHORT);
          }
          else {
            id = 1;
            setTasks((prevTasks) => {
              return [
                ...prevTasks,
                { id: id, text: text}
              ]
            });
            ToastAndroid.show('Zadatak dodan',ToastAndroid.SHORT);

          }
        }
      }
    
      const deleteTask = (id) => {
        setTasks((prevTask) =>{
          return prevTask.filter(task => task.id != id)
        });
        console.log('clicked');
      }
    return(
        <View style={styles.mainView}>
            <View style={styles.flatlistView}>
                <FlatList style={styles.flatlistContainer}
                data={tasks}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => (
                  <TouchableWithoutFeedback onPress={() => navigation.navigate('TodoDetailsScreen')}>
                      <View style={styles.flatlistContent} onPress={() => navigation.navigate('TodoListScreen')}>
                          <Text style={styles.textTask}>{item.text}</Text>
                          {/* <Button style={styles.btnDelete} /*onPress={() => deleteCallback(item.id)} title='delete'></Button> */}
                      </View>
                    </TouchableWithoutFeedback>
                )}>
                </FlatList>
            </View>
            
            <View style={styles.containerInput}>
                <TextInput placeholder="Unesite zadatak" 
                style={styles.input}
                onChangeText={changeHandler} />
                <Button style={styles.btnAdd} /*onPress={() => addTask(text)}*/ onPress={() => navigation.navigate('TodoFormScreen')} title="Add"/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1
    },
    flatlistView: {
        flex: 1
    },
    flatlistContent: {
        flexDirection: 'row',
        flex: 1,
        margin: 5,
        borderWidth: 1,
        borderColor: '#bbb',
        borderRadius:10,
        padding: 20
    },
    textTask: {
        flex: 1,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 17,
    },
    
    containerInput: {
        flexDirection: 'row',
        bottom: 0,
        padding: 5,
        justifyContent: 'space-between'
    },
    input: {
        flex: 1,
        textAlign: 'center',
        borderBottomColor: '#000',
        borderBottomWidth: 2
    },
    btnAdd: {
        paddingLeft: 10
    }
})