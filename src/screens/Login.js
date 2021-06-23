import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'

const Login = ({ navigation }) => {
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

            <TouchableOpacity style={styles.forgot}>
                <Text>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={styles.registerText}>Register</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#AFEEEE',
        alignItems: 'center',
        justifyContent: 'center',
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
    forgot: {
        color: '#ffffff',
        fontSize: 11,
    },
    loginBtn: {
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
        color: 'black',
    },
    loginText: {
        color: 'white',
        fontWeight: 'bold',
    },
})
