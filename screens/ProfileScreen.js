import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor:"purple"}}>

    <View style={{backgroundColor:"white", height:500, width:250, padding:5, marginLeft:55, marginTop:40, borderRadius:20}}>
      <Text style={{textAlign:"center", fontWeight:"bold", fontSize:30}}>HEY THIS IS</Text>
      <Text style={{textAlign:"center", fontWeight:"bold", fontSize:25}}>A WORK IN PROGRESS</Text>
      <Text style={{textAlign:"center", fontWeight:"bold", fontSize:20}}>SALAHIN DERYL</Text>
      <Image
      style={{height:"70%", width:"100%"}}
      source={{ uri: "https://ih1.redbubble.net/image.1104977686.1309/flat,750x,075,f-pad,750x1000,f8f8f8.jpg"}}
      />
    </View>
    </SafeAreaView>
  )
}

export default ProfileScreen