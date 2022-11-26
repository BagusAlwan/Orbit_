import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import useAuth from '../hooks/useAuth';
import { useNavigation } from '@react-navigation/core'
import { doc, serverTimestamp, setDoc } from "firebase/firestore"; 
import { db } from "../config";
import { SafeAreaView } from 'react-native-safe-area-context';

const ModalScreen = () => {
    const navigation = useNavigation();
    const { user } = useAuth();
    const [image, setImage] = useState(null);
    const [name, setName] = useState(null);
    const [age, setAge] = useState(null);
    const [bio, setBio] = useState(null);
    const [location, setLocation] = useState(null);

    const incompleteForm = !image || !name || !age || !bio || !location;

    const createUser = async () => {
      await setDoc(doc(db, "users", user.uid), {
        id: user.uid,
        name: name,
        image: image,
        age: age,
        bio: bio,
        location: location,
        timestamp: serverTimestamp()
      }).then(() => {
        navigation.navigate("Home")
      }).catch((error) => {
        alert(error.message);
      });
    };

    
  return (
    <SafeAreaView style={{ flex: 1}}>

    <View style={{ flex: 1, alignItems:"center", paddingTop:1}}>

      <Text style={{textAlign: "center", fontSize:30, fontWeight:"bold", paddingTop:2, marginTop:50, marginBottom:15}}>
        Welcome, Space Cadets!
      </Text>

      <Text style={{fontSize:16, textAlign: "center", marginTop:10, padding:10, fontWeight:"bold", color:'purple' }}>
        Introduce us your best look!
      </Text>
      <TextInput
      value={image}
      onChangeText={text => setImage(text)}
      placeholder='insert your picture URL'/>
      <Text style={{fontSize:16, textAlign: "center", marginTop:10, padding:10, fontWeight:"bold", color:'purple' }}>
        What should we call you?
      </Text>
      <TextInput
      value={name}
      onChangeText={text => setName(text)}
      placeholder='type your name'/>
      <Text style={{fontSize:16,textAlign: "center", marginTop:10, padding:10, fontWeight:"bold", color:'purple' }}>
        How about your age?
      </Text>
      <TextInput
      value={age}
      onChangeText={text => setAge(text)} 
      placeholder='type your age'
      keyboardType='numeric'
      maxLength={2}/>
      <Text style={{fontSize:16, textAlign: "center", marginTop:10, padding:10, fontWeight:"bold", color:'purple' }}>
        Anything to say for future admirers?
      </Text>
      <TextInput
      value={bio}
      onChangeText={text => setBio(text)} 
      placeholder='type your bio'/>
      <Text style={{fontSize:16, textAlign: "center", marginTop:10, padding:10, fontWeight:"bold", color:'purple' }}>
        Care to tell your Matches where you're from?
      </Text>
      <TextInput 
      value={location}
      onChangeText={text => setLocation(text)}
      placeholder='type your location'/>

      <TouchableOpacity
      disabled={incompleteForm} 
      style={[styles.button, incompleteForm ? styles.buttonOff : styles.button,]}
      onPress={createUser}>
        <Text style={{color:"white", fontSize:20}}>Update My Profile</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  )
}

export default ModalScreen

const styles = StyleSheet.create({
    button:{
        marginTop:50,
        height:60,
        width:250,
        backgroundColor:'#4C3575',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50,
    },
    buttonOff:{
        marginTop:50,
        height:60,
        width:250,
        backgroundColor:'gray',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50,
    }
})