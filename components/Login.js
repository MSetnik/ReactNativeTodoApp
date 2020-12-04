import React, {useState} from 'react';
import {View, Text, StyleSheet, ImageBackground, TextInput, Button } from 'react-native';
import background from '../assets/loginImg.jpg';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function Login({navigation}) {
    return(
        <View style={styles.mainView}>
            <ImageBackground style={styles.image}  source={background}>
                <View style={styles.loginContainer}>
                    <Text style={styles.mainText}>Login</Text>
                    <View style={styles.loginInputContainer}>
                        <View style={styles.usernameView}>
                            <Text style={styles.usernameText}>Username:</Text>
                            <TextInput style={styles.usernameInput} placeholder="username"></TextInput>
                        </View>
                        <View style={styles.passwordView}>
                            <Text  style={styles.passwordText}>Password:</Text>
                            <TextInput  style={styles.passwordInput} placeholder="password"></TextInput>
                        </View>
                    </View>
                    <View style={styles.viewLoginBtn}>
                        <Button style={styles.buttonLogin} onPress={() => navigation.navigate('TodoListScreen')} title='Log in'/>           
                    </View>
                    <View style={styles.viewRegisterBtn}>
                        <Text style={styles.registerText}>Dont have an account? Register here!</Text>
                        <Button style={styles.buttonRegister} title='Register'/>
                    </View>
                </View>
            </ImageBackground >
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: 'center'
    },
    loginContainer: {
        backgroundColor: 'white',
        borderRadius: 30,
        elevation: 5,
        alignItems: 'center',
        padding: 20,
        width: 300,
        height: 450
    },
    mainText: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    loginInputContainer: {
        width: '100%',
        marginTop: 40,
        alignItems: 'center',
    },
    usernameView: {
        marginBottom: 40,
        width: '100%',
    },
    passwordView: {
        marginBottom: 40,
        width: '100%',
    },
    usernameText: {
        fontSize: 20,
        textAlign: 'center'
    },
    usernameInput: {
        height: 50,
        fontSize: 20,
        textAlign: 'center',
        borderColor: 'black',
        borderBottomWidth: 1
    },
    passwordText: {
        fontSize: 20,
        textAlign: 'center'
    },
    passwordInput: {
        height: 50,
        fontSize: 20,
        textAlign: 'center',
        borderColor: 'black',
        borderBottomWidth: 1
    },
    viewLoginBtn: {
        alignSelf: 'stretch'
    },
    viewRegisterBtn: {
        marginTop: 20,
        alignSelf: 'stretch'
    },
    buttonLogin: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonRegister: {
        flexDirection: 'row',
        flex: 1
    },
    registerText: {
        textAlign: 'center',
        fontSize: 16
    }
})