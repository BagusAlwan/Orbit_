//import { collection, doc, onSnapshot, query, where } from '@firebase/firestore';
import React, {useEffect, useState, FlatList, keyExtractor, renderItem } from 'react';
import {View, Text} from 'react-native';
import { db } from "../config";
import useAuth from '../hooks/useAuth';
import ChatRow from '../screens/ChatRow';
import { onSnapshot, doc, collection, setDoc, query, where, getDocs, getDoc, serverTimestamp } from 'firebase/firestore';
import { SafeAreaView } from 'react-native-safe-area-context';

const ChatList = () => {

    const [matches,setMatches] = useState([]);
    const {user} = useAuth();

    useEffect(
        ()=>
        onSnapshot(
            query(
                collection(db, "pairs"), 
                where("usersPairs", 'array-contains', user.uid)
            ),
            (snapshot) =>
                setMatches(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data(),
                    }))
                )
        ),
     
    [user, db]
    );

    console.log(matches);
/*
    return matches.length > 0 ? (
        <FlatList
            data={matches}
            keyExtractor={item => item.id}
            renderItem={({item}) => <ChatRow matchDetails={item} />}
        />
        ) : (
            <SafeAreaView>
            <View style={{padding:5, marginTop:60}}>
                <Text style = {{textAlign:'center', fontSize:28}}> No matches at the moment </Text>
            </View>
            </SafeAreaView>
        );*/

        return (
            <Text>YO</Text>
                )
};

export default ChatList;