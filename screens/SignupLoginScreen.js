import * as React from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity, Alert} from 'react-native';
import db from '../config';
import firebase from 'firebase';


export default class SignupLoginScreen extends React.Component{
    constructor(){
        super()
        this.state={
            emailId: '',
            password: ''
        }
    }
    signUp=(emailId, password)=>{
firebase.auth().createUserWithEmailAndPassword(emailId, password)
.then((response)=>{
return Alert.alert('user added successfully')
})
.catch(function(error){
    var errorCode=error.error.code
    var errorMessage=error.error.message
return Alert.alert(errorMessage)
})
    }

    login=(emailId, password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId, password)
        .then((response)=>{
        return Alert.alert('user logged in successfully')
        })
        .catch(function(error){
            var errorCode=error.error.code
            var errorMessage=error.error.message
        return Alert.alert(errorMessage)
        })
            }
render(){
    return(
        <View style={styles.container}>
            <View style={styles.title}>
                <Text>Barter</Text>
            </View>
         <TextInput
         style={styles.inputBox}
         placeholder={'abc@example.com'} 
         onChangeText={(text)=>{
this.setState({
    emailId:text
})
         }}
         />   
          <TextInput
         style={styles.inputBox}
         placeholder={'password'} 
         secureTextEntry={true}
         onChangeText={(text)=>{
this.setState({
    password:text
})
         }}
         />  
<TouchableOpacity style={styles.button}
onPress={()=>{
    this.signUp(this.state.emailId, this.state.password)
}}
>
<Text style={styles.buttonText}>Sign Up</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.button}
onPress={()=>{
    this.login(this.state.emailId, this.state.password)
}}
>
<Text style={styles.buttonText}>Login</Text>
</TouchableOpacity>

        </View>
    )
}
}

const styles=StyleSheet.create({
    container:{
flex: 1,
backgroundColor:'black'
    },
    inputBox:{
width: 300,
height: 40,
borderBottomWidth: 1.5,
borderColor: 'turquoise',
fontSize: 20,
margin: 10,
paddingLeft:10
    },
    button:{
width: 300,
height: 50,
justifyContent: 'center',
alignItems: 'center',
borderRadius: 25,
backgroundColor: 'blue',
shadowColor: '#000',
shadowOffset: {
    width: 0,
    height: 8,
},
shadowOpacity: 0.30,
shadowRadius: 10.32,
elevation: 16
    },
    buttonText:{
color: 'white',
fontWeight: '200',
fontSize: 20
    },
    title:{
fontSize: 65,
fontWeight: '300',
paddingBottom: 30,
color: 'white'
    }
})