import React from "react";

import { useNavigation } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Box, Text, Title, Touchable } from "../../components";
import { View } from "react-native";
import { colors } from '../../styles/theme.json'

import util from '../../util'


const Header = ({title = 'Explore', right = null, goBack = false }) => {

    const navigation = useNavigation()
    return (
        
        <View
        style={{
        width: '100%',
        borderBottomWidth: 1,
        borderBottomStyle: 'solid',
        borderBottomColor: util.toAlpha(colors.muted, 50),
        backgroundColor: colors.light,
    }}
        >
    <StatusBar style="auto"/>

    <SafeAreaView style={{flexDirection: "row"}} >  

        <Touchable width="70px" hasPadding
            onPress={() => navigation[!goBack ? "openDrawer" : "goBack"]()}
        >
            <MaterialCommunityIcons name={!goBack ? "menu" : "arrow-left"} size={20} color="black" />
        </Touchable>

        <Touchable align="center" justify="center">
            <Title>{title}</Title>
        </Touchable>

        {
            right ? right() : <Touchable hasPadding width="70px"></Touchable>
        
        }
    </SafeAreaView>
</View>
        

    )
}

export default Header