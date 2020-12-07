import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/Header';
import TodoListScreen from './components/TodoListScreen';
import Login from './components/Login';
import TodoDetailsScreen from './components/TodoDetailsScreen';
import TodoFormScreen from './components/TodoFormScreen';
import { connect, Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import store from './redux/store/store';
import * as actionCreators from './redux/actions/actionCreators';
import Main from './components/mainScreen'

export default function App() {  

  store.dispatch(actionCreators.todoAdded(1,'new todo user 1'));
  store.dispatch(actionCreators.todoAdded(1, 'todo 2'));
  
  store.dispatch(actionCreators.todoAdded(2, 'todo user 2'));
  store.dispatch(actionCreators.todoAdded(2, 'user 2 new todo'));

  store.dispatch(actionCreators.addUser('user', 'user'))
  store.dispatch(actionCreators.addUser('test', 'test'))


  // console.log(props);
  // const storeData = store.getState();

  // let isSignedIn = false;
  // const test = storeData.userReducer.filter((item) => item.signedIn ? console.log('yes') : console.log('no'));

  // console.log(test)
  // // const [tasks, setTasks] = useState([{
  // //   id: 1,
  // //   text: 'baciti smece'
  // // }, {
  // //   id: 2,
  // //   text: 'oprati sude'
  // // }]);

  // // const addTask = (text) => {
  // //   if(text.length == 0) {
  // //     console.log('empty');
  // //     Alert.alert('UPS', 'Morate upisati zadatak', [
  // //       {
  // //         text: 'Ok',
  // //         onPress: ()=> console.log('close alert')
  // //       }
  // //     ]);
  // //   } 
  // //   else 
  // //   {
  // //     var index;
  // //     var id;

  // //     if(tasks.length !== 0) {
  // //       index = tasks.length-1;
  // //       id = tasks[index].id;
  // //       setTasks((prevTasks) => {
  // //         return [
  // //           ...prevTasks,
  // //           { id: ++id, text: text}
  // //         ]
  // //       })
  // //     }
  // //     else {
  // //       id = 1;
  // //       setTasks((prevTasks) => {
  // //         return [
  // //           ...prevTasks,
  // //           { id: id, text: text}
  // //         ]
  // //       })
  // //     }
  // //   }
  // // }

  // // const deleteTask = (id) => {
  // //   setTasks((prevTask) =>{
  // //     return prevTask.filter(task => task.id != id)
  // //   });
  // //   console.log('clicked');
  // // }


  
  
  // const Stack = createStackNavigator();

  // // var isSignedIn = false;
  // // isSignedIn ? (
  // //   <>

  // //     <Stack.Screen name="TodoFormScreen" component={TodoFormScreen} options={{title: 'New Todo'}}/>
  // //           <Stack.Screen name="TodoListScreen" component={TodoListScreen} options={{title: 'Todos'}}/>
  // //           <Stack.Screen name="TodoDetailsScreen" component={TodoDetailsScreen} options={{title: 'Details'}}/>

  // //   </>
  // // ) : (
  // //   <>
  // //           <Stack.Screen name="Login" 
  // //             component={Login}
  // //             options={{title: 'Login'}}
  // //           />
  // //   </>
  // // )


  


  return (
    <Provider store= {store}>
      <Main/>
    </Provider>
//     <Provider store={store}>
//       <SafeAreaView style={styles.container}>
//         <StatusBar style="auto" />
//         <NavigationContainer>
//           <Stack.Navigator initialRouteName='Main'
//                 screenOptions={{
//                   title: 'Login',
//                   headerStyle: {
//                     backgroundColor: '#1565c0'
//                   },
//                   headerTintColor: '#fff'
//                 }}>
//               {isSignedIn ? (
//                 <>
//                   <Stack.Screen name="TodoListScreen" component={TodoListScreen} options={{title: 'Todos'}}/>
//                   <Stack.Screen name="TodoFormScreen" component={TodoFormScreen} options={{title: 'New Todo'}}/>
//                   <Stack.Screen name="TodoDetailsScreen" component={TodoDetailsScreen} options={{title: 'Details'}}/>
//                 </>
//               ) : (
//                 <>
//                   <Stack.Screen name="Login" component={Login} />
//                 </>
//               )}
//           {/* <Stack.Navigator initialRouteName='Login'
//             screenOptions={{
//               title: 'Login',
//               headerStyle: {
//                 backgroundColor: '#1565c0'
//               },
//               headerTintColor: '#fff'
//             }}>

//             <Stack.Screen name="Login" 
//               component={Login}
//               options={{title: 'Login'}}
//             /> */}
// {/* 
//             <Stack.Screen name="TodoFormScreen" component={TodoFormScreen} options={{title: 'New Todo'}}/>
//             <Stack.Screen name="TodoListScreen" component={TodoListScreen} options={{title: 'Todos'}}/>
//             <Stack.Screen name="TodoDetailsScreen" component={TodoDetailsScreen} options={{title: 'Details'}}/>
//           </Stack.Navigator> */}
//           </Stack.Navigator>
//         </NavigationContainer>
//       </SafeAreaView>
//       </Provider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   TodoInput: {
//     textAlign: 'center' ,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

// });
