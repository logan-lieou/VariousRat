import * as React from 'react';
import { StyleSheet } from 'react-native';

import { View, Text } from '../components/Themed';

export default function TabThreeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Post</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <Text>Filler for Posts</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
})
