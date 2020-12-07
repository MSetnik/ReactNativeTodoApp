import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
// import Header from './components/Header';
import TodoListScreen from './TodoListScreen';
import Login from './Login';
import TodoDetailsScreen from './TodoDetailsScreen';
import TodoFormScreen from './TodoFormScreen';
import { connect, Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import store from '../redux/store/store';
import * as actionCreators from '../redux/actions/actionCreators';
import Register from './Register';

function Main(props) {  

//   store.dispatch(actionCreators.todoAdded('new todo'));
//   store.dispatch(actionCreators.todoAdded('todo 2'));

//   store.dispatch(actionCreators.addUser('user', 'user'))
const [user, setUser] = useState(null);

  console.log(props);
  const storeData = store.getState();

  const test = () => props.state.userReducer.filter((item) => item.signedIn ? setUser(item): null);

//   console.log(props.state.userReducer.filter((item) => item.signedIn ? console.log('yes') : console.log('no')))


    const loginSuccessCallback = (success) => {
      if(success) {
        // const user = test()
        const user = () => props.state.userReducer.filter((item) => item.signedIn ? setUser(item): null)
        console.log(user())
        setLoggedInScreen( 
            <>

                <Stack.Screen name="TodoListScreen" component={TodoListScreen} options={{title: 'Todos'}} /> 
                <Stack.Screen name="TodoFormScreen" component={TodoFormScreen} options={{title: 'New Todo'}}/>
                <Stack.Screen name="TodoDetailsScreen" component={TodoDetailsScreen} options={{title: 'Details'}}/>
            
            </>
        )
      }
  }
  
  const Stack = createStackNavigator();
const [loggedInScreen, setLoggedInScreen] = useState((
    <>
      <Stack.Screen name="Login" component={Login} initialParams={{
          loginCallback: loginSuccessCallback
      }} />
      <Stack.Screen name="Register" component={Register} />
    </>
  ));
    
  return (
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Main'
                screenOptions={{
                  title: 'Login',
                  headerStyle: {
                    backgroundColor: '#1565c0'
                  },
                  headerTintColor: '#fff'
                }}>
              {/* {userLoggedIn ? (
                <>
                  <Stack.Screen name="TodoListScreen" component={TodoListScreen} options={{title: 'Todos'}}/>
                  <Stack.Screen name="TodoFormScreen" component={TodoFormScreen} options={{title: 'New Todo'}}/>
                  <Stack.Screen name="TodoDetailsScreen" component={TodoDetailsScreen} options={{title: 'Details'}}/>
                </>
              ) : (
                <>
                  <Stack.Screen name="Login" component={Login} />
                </>
                
              )} */}
              {loggedInScreen}
              {/* {userLoggedIn ? (
                <>
                  <Stack.Screen name="TodoListScreen" component={TodoListScreen} options={{title: 'Todos'}}/>
                  <Stack.Screen name="TodoFormScreen" component={TodoFormScreen} options={{title: 'New Todo'}}/>
                  <Stack.Screen name="TodoDetailsScreen" component={TodoDetailsScreen} options={{title: 'Details'}}/>
                </>
              ) : } */}
          {/* <Stack.Navigator initialRouteName='Login'
            screenOptions={{
              title: 'Login',
              headerStyle: {
                backgroundColor: '#1565c0'
              },
              headerTintColor: '#fff'
            }}>

            <Stack.Screen name="Login" 
              component={Login}
              options={{title: 'Login'}}
            /> */}
{/* 
            <Stack.Screen name="TodoFormScreen" component={TodoFormScreen} options={{title: 'New Todo'}}/>
            <Stack.Screen name="TodoListScreen" component={TodoListScreen} options={{title: 'Todos'}}/>
            <Stack.Screen name="TodoDetailsScreen" component={TodoDetailsScreen} options={{title: 'Details'}}/>
          </Stack.Navigator> */}
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  TodoInput: {
    textAlign: 'center' ,
    justifyContent: 'center',
    alignItems: 'center',
  },

});

const mapStateToProps= state => {
  return{ state}
}

export default connect(mapStateToProps)(Main)