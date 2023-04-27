import { StyleSheet , Text, View,TextInput, TouchableOpacity } from "react-native";
import React , { useState }from "react";
import { KeyboardAvoidingView } from "react-native";
const Signup = ({navigation}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async() => {
        if (name === '' || email === '' || password === ''){
            alert("All fields are required");
            return;
        }
        await axios.post("http://localhost:8081/api/signup" , {name, email, password});
        alert("Signup successful");
    };
    return (
        <KeyboardAvoidingView contentContainerStyle={StyleSheet.container}>
            <View style = {{marginVertical: 100}}>
            <Text style={styles.signupText}>SignUP</Text>
            <View style = {{ marginHorizontal: 24}}>
                <Text style={{ fontSize: 14, color: '#8e93a1'}}>Name :</Text>
                <TextInput style={styles.signupInput}
                           value={name}
                           onChangeText={text => setName(text)}
                           autoCapitalize="words"
                           autoCorrect = {false} />
            </View>
            <View style = {{ marginHorizontal: 24}}>
                <Text style={{ fontSize: 14, color: '#8e93a1'}}>email :</Text>
                <TextInput style={styles.signupInput}
                           value={email}
                           onChangeText={text => setEmail(text)}
                           autoComplete="email"
                           keyboardType="email-address" />
            </View>
            <View style = {{ marginHorizontal: 24}}>
                <Text style={{ fontSize: 14, color: '#8e93a1'}}>Password :</Text>
                <TextInput style={styles.signupInput}
                           value={password}
                           onChangeText={text => setPassword(text)}
                           secureTextEntry = {true}
                           autoComplete="password" />
            </View>
            <TouchableOpacity onPress={handleSubmit} style={styles.buttonStyle}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
            <Text style = {{fontSize: 12, textAlign: 'center'}}>
                Already a Member !{""} <Text style={{color: 'darkred', fontWeight:'bold'}}
                onPress={() => navigation.navigate("SignIn")}>Sign In..
            </Text>
            </Text>
            <Text style = {{marginHorizontal: 22}}>
                {JSON.stringify({name, email, password})}
            </Text>
        </View>
        </KeyboardAvoidingView>
    )
}

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center'
        },
        signupText: {
            fontSize: 26,
            textAlign: 'center'
        },
        signupInput: {
            borderBottomWidth: 0.5,
            height: 28,
            borderBottomColor: '#8e93a1',
            marginBottom: 30,
        },
        buttonStyle: {
            backgroundColor: 'magenta',
            height: 50,
            marginBottom: 20,
            justifyContent: "center",
            marginHorizontal: 15,
            borderRadius: 15,
        },
        buttonText: {
            fontSize: 20,
            textAlign:'center',
            color: '#fff',
            textTransform: 'uppercase',
            fontWeight: 'bold'
        },
        imageContainer: {  justifyContent: "center", alignItems: "center", },
        imageStyles: { width: 100, height: 100, marginVertical: 20 },
    })

export default Signup