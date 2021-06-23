import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const Home = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../img/Logo.png')} />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
})
