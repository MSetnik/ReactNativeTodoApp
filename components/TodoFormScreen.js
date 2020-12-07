import React, {useState} from 'react';
import{ View, StyleSheet, Text, Button, TextInput} from 'react-native';
import Header from './Header';
import { connect } from 'react-redux';
import {todoAdded} from '../redux/actions/actionCreators';

function TodoFormScreen(props) {

    function addTodo() {
        props.addTodo(input)
        props.navigation.navigate('TodoListScreen')
    }

    const [input, setInput] = useState(''); 
    return(
        <View style={styles.container}>
            <View style={styles.mainView}>
                <View style={styles.viewBtns}>
                    <View style={styles.btns}>
                        <Button title='Save' onPress={() =>addTodo()}/>
                    </View>
                    <View style={styles.btns}>
                        <Button title='Dissmis' color='red' onPress={() => props.navigation.navigate('TodoListScreen')}/>
                    </View>
                </View>
                <View style={styles.todoView}>
                    <Text style={styles.newTodoText}>New Todo</Text>
                    <View style={styles.todoInputView}>
                        <TextInput style={styles.newTodoInput} onChangeText={e => setInput(e)} value={input} placeholder='New todo' multiline={true} />
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

const mapStateToProps = state => {
    const todos = state
    console.log(todos);
    return { todos };
};


const mapDispatchToProps = dispatcher => {
    return { 
      addTodo: (id, text) => dispatcher(todoAdded(id, text))
    };
  };
  

export default connect(mapStateToProps, mapDispatchToProps)(TodoFormScreen)