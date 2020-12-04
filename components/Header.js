import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default function Header({screenName}) {
    return (
        <View>
            <View style={styles.statusBar}></View>
            <View style={styles.header}>
                <Text style={styles.title}>{screenName}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        justifyContent: 'center',
        height: 60,
        backgroundColor: '#1565c0',
    },
    title: {
        textAlign:'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    statusBar: {
        height: 25,
        backgroundColor:'#003c8f'
    }
});
