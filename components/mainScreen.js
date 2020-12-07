import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
// import Header from './components/Header';
import TodoListScreen from "./TodoListScreen";
import Login from "./Login";
import TodoDetailsScreen from "./TodoDetailsScreen";
import TodoFormScreen from "./TodoFormScreen";
import { connect, Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import store from "../redux/store/store";
import * as actionCreators from "../redux/actions/actionCreators";
import Register from "./Register";

function Main(props) {
  const loginSuccessCallback = (success) => {
    if (success) {
      setLoggedInScreen(
        <>
          <Stack.Screen
            name="TodoListScreen"
            component={TodoListScreen}
            options={{ title: "Todos" }}
          />
          <Stack.Screen
            name="TodoFormScreen"
            component={TodoFormScreen}
            options={{ title: "New Todo" }}
          />
          <Stack.Screen
            name="TodoDetailsScreen"
            component={TodoDetailsScreen}
            options={{ title: "Details" }}
          />
        </>
      );
    }
  };

  const Stack = createStackNavigator();
  const [loggedInScreen, setLoggedInScreen] = useState(
    <>
      <Stack.Screen
        name="Login"
        component={Login}
        initialParams={{
          loginCallback: loginSuccessCallback,
        }}
      />
      <Stack.Screen name="Register" component={Register} />
    </>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Main"
          screenOptions={{
            title: "Login",
            headerStyle: {
              backgroundColor: "#1565c0",
            },
            headerTintColor: "#fff",
          }}
        >
          {loggedInScreen}
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
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});

const mapStateToProps = (state) => {
  return { state };
};

export default connect(mapStateToProps)(Main);
