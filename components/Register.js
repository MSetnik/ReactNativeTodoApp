import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  Button,
} from "react-native";
import background from "../assets/loginImg.jpg";
import { addUser } from "../redux/actions/actionCreators";
import { connect } from "react-redux";

function Register(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.mainView}>
      <ImageBackground style={styles.image} source={background}>
        <View style={styles.loginContainer}>
          <Text style={styles.mainText}>Register ( Not implemented yet)</Text>
          <View style={styles.loginInputContainer}>
            <View style={styles.usernameView}>
              <Text style={styles.usernameText}>Username:</Text>
              <TextInput
                style={styles.usernameInput}
                placeholder="username"
                onChangeText={(e) => setUsername(e)}
              ></TextInput>
            </View>
            <View style={styles.passwordView}>
              <Text style={styles.passwordText}>Password:</Text>
              <TextInput
                style={styles.passwordInput}
                placeholder="password"
                onChangeText={(e) => setPassword(e)}
              ></TextInput>
            </View>
          </View>
          <View style={styles.viewLoginBtn}>
            <Button
              style={styles.buttonLogin}
              onPress={() => Register(username, password)}
              title="Register"
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  loginContainer: {
    backgroundColor: "white",
    borderRadius: 30,
    elevation: 5,
    alignItems: "center",
    padding: 20,
    width: 300,
    height: 450,
  },
  mainText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  loginInputContainer: {
    width: "100%",
    marginTop: 40,
    alignItems: "center",
  },
  usernameView: {
    marginBottom: 40,
    width: "100%",
  },
  passwordView: {
    marginBottom: 40,
    width: "100%",
  },
  usernameText: {
    fontSize: 20,
    textAlign: "center",
  },
  usernameInput: {
    height: 50,
    fontSize: 20,
    textAlign: "center",
    borderColor: "black",
    borderBottomWidth: 1,
  },
  passwordText: {
    fontSize: 20,
    textAlign: "center",
  },
  passwordInput: {
    height: 50,
    fontSize: 20,
    textAlign: "center",
    borderColor: "black",
    borderBottomWidth: 1,
  },
  viewLoginBtn: {
    alignSelf: "stretch",
  },
  viewRegisterBtn: {
    marginTop: 20,
    alignSelf: "stretch",
  },
  buttonLogin: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonRegister: {
    flexDirection: "row",
    flex: 1,
  },
  registerText: {
    textAlign: "center",
    fontSize: 16,
  },
});

const mapStateToProps = (state) => {
  return { state };
};

const dispatchStateToProps = (dispatcher) => {
  return {
    addNewUser: (username, password) => dispatcher(addUser(username, password)),
  };
};

export default connect(mapStateToProps, dispatchStateToProps)(Register);
