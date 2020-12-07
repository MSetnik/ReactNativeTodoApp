import React, {useState} from 'react';
import { Text, View, StyleSheet, FlatList, TextInput, Button, ToastAndroid, TouchableWithoutFeedback} from 'react-native';
import Header from './Header';
import store from '../redux/store/store';
import {connect} from 'react-redux';
import {todoAdded} from '../redux/actions/actionCreators';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { registerRootComponent } from 'expo';
import {getUserTodos} from '../redux/actions/actionCreators';


function TodoListScreen(props) {
    const [tasks, setTasks] = useState([{
        id: 1,
        text: 'baciti smece'
      }, {
        id: 2,
        text: 'oprati sude'
      }]);

    const[text, setText] = useState('');
    // console.log(' props ' + props.todos)
    // const store = useStore();
    

    // storeSubs();
    // const {userId} = route.params
    // console.log(userId);
    // console.log(store.getState());
    console.log(props)

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


    
    const userTodos = () => {
      // return props.todos.filter((item) => item.userId == userLoggedIn.id )
      var userLoggedInID = null
      props.state.userReducer.forEach(user => {
        if(user.signedIn) {
          userLoggedInID = user.id
        }
      });
      return userLoggedInID

      // var todos = []
      // props.todos.forEach(todo => {
      //   if(todo.userId == userLoggedInID) {
      //     todos.push(todo)
      //   }
      // });
      // console.log(todos)
      // return todos;
      // console.log(userLoggedIn.map((item) => item.signedIn ? item.id : null))
    }
    // console.log(userTodos())
    // console.log(props.getUserTodos(1))

    // console.log(() => userTodos)
    // console.log(props.todos.filter(todo => todo.userId == userTodos()))
    return(
        <View style={styles.mainView}>
            <View style={styles.flatlistView}>
                <FlatList style={styles.flatlistContainer}
                data={props.userTodos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => (
                  <Swipeable>
                    <TouchableWithoutFeedback onPress={() => props.navigation.navigate('TodoDetailsScreen', {
                      todoId: item.id.toString()
                    })}>
                    
                      <View style={styles.flatlistContent} >
                          <Text style={styles.textTask}>{item.todoText}</Text>
                          {/* <Button style={styles.btnDelete} /*onPress={() => deleteCallback(item.id)} title='delete'></Button> */}
                      </View>
                    </TouchableWithoutFeedback>
                    </Swipeable>
                )}>
                </FlatList>
            </View>
            
            <View style={styles.containerInput}>
                <TextInput placeholder={props.state.userReducer.map((user) => user.signedIn ? user.username : null)}
                style={styles.input}
                onChangeText={changeHandler} />
                <Button style={styles.btnAdd} /*onPress={() => addTask(text)}*/ onPress={() => props.navigation.navigate('TodoFormScreen')} title="Add"/>
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


const mapStateToProps = state => {
  console.log(state)
  var userid = null;
  state.userReducer.forEach(user => {
    if(user.signedIn) {
      userid = user.id
    }
  });
  
  const todos = state.todoReducer.filter(todo => todo.userId == userid)
  console.log(todos, userid);
  return { 
    todos: state.todoReducer,
    state: state,
    userTodos: todos
  };
};

const dispatchStateToProps = dispatcher => {
  return { 
    getUserTodos: (id) => dispatcher(getUserTodos(id))
  };
}

export default connect(mapStateToProps, dispatchStateToProps)(TodoListScreen);