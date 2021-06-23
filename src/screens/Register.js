import React, { useState } from 'react'
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'

const Register = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.imgView}>
                <Image source={require('../img/Logo.png')} />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Name"
                    onChangeText={text => setName(text)} />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Email"
                    onChangeText={text => setEmail(text)} />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    secureTextEntry
                    style={styles.inputText}
                    placeholder="Password"
                    onChangeText={text => setPassword(text)} />
            </View>

            <TouchableOpacity style={styles.registerBtn} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.registerText}>REGISTER</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#AFEEEE',
    },
    imgView: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 40,
    },
    inputView: {
        width: '80%',
        height: 50,
        backgroundColor: 'white',
        borderRadius: 25,
        marginBottom: 20,
        justifyContent: 'center',
        padding: 20,
    },
    inputText: {
        height: 50,
        color: '#000000',
    },
    registerBtn: {
        width: '50%',
        height: 50,
        backgroundColor: '#4682B4',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        marginBottom: 10,
    },
    registerText: {
        color: 'white',
        fontWeight: 'bold',
    },
    loginText: {
        color: 'black',
    },
})
