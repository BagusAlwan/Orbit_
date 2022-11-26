import { View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import getMatchedUserInfo from '../lib/getMatchedUserInfo';
import {useNavigation} from '@react-navigation/core';


const ChatRow = ({matchDetails}) => {
  const navigation = useNavigation();
  const {user} = useAuth();
  const[matchedUserInfo, setMatchedUserInfo] = useState(null);

  useEffect(() =>{
    setMatchedUserInfo(getMatchedUserInfo(matchDetails.users,user.uid))
  },[matchDetails,user])

  return (
    <TouchableOpacity style = {[{flex:0.25, flexDirection:"row", backgroundColor:'white'}, styles.cardShadow]}>
      <View>
        <Text> Hello There </Text>
      </View>
      <Image
        style = {{height:16, width:16, borderRadius:10}}
        source = {{uri: matchedUserInfo?.image}}
      />

      <View>
        <Text> {matchedUserInfo?.name}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default ChatRow;

const styles = StyleSheet.create({
    cardShadow: {
        shadowColor: "#000000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity:  0.21,
        shadowRadius: 1.41,
        elevation: 2,
      },
})