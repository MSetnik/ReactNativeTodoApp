import React from 'react';
import {View,Button, Text, StyleSheet} from 'react-native';
import Header from './Header';

export default function TodoDetailsScreen() {
    return(
        <View style={styles.container}>
            <View style={styles.mainView}>
                <View style={styles.viewButtons}>
                    <View style={styles.btns}>
                        <Button title='Completed'/>
                    </View>
                    <View style={styles.btns}>
                        <Button title='Delete' color='red'/>
                    </View>
                </View>
                <View style={styles.viewTodoText}>
                    <Text style={styles.todoText}>Primjer todos teksta</Text>
                </View>
            </View>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    mainView: {
        marginTop: 10,
        flex: 1,
    },
    viewButtons: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    btns: {
        margin: 5
    },
    viewTodoText: {
        padding: 10
    },
    todoText: {
        fontSize: 18
    }
})
