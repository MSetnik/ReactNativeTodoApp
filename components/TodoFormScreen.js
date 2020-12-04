import React from 'react';
import{ View, StyleSheet, Text, Button, TextInput} from 'react-native';
import Header from './Header'

export default function TodoFormScreen() {
    return(
        <View style={styles.container}>
            <View style={styles.mainView}>
                <View style={styles.viewBtns}>
                    <View style={styles.btns}>
                        <Button title='Save'/>
                    </View>
                    <View style={styles.btns}>
                        <Button title='Dissmis' color='red'/>
                    </View>
                </View>
                <View style={styles.todoView}>
                    <Text style={styles.newTodoText}>New Todo</Text>
                    <View style={styles.todoInputView}>
                        <TextInput style={styles.newTodoInput} placeholder='New todo' multiline={true} />
                    </View>
                </View>
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    mainView: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
        flex: 1
    },
    newTodoText: {
        fontSize: 20
    },
    newTodoInput: {
        fontSize: 17,
        borderColor: 'black',
        borderBottomWidth: 1
    },
    todoView: {
        flex: 1
    },
    todoInputView: {
        flex: 1,
        marginTop: 10
    },
    viewBtns: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    btns: {
        margin: 5
    }
})