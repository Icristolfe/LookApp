import React from "react";
import { Box, Text, Title, Touchable } from "../../components";

import { StatusBar } from 'expo-status-bar';

import { SafeAreaView } from 'react-native-safe-area-context'

import { MaterialCommunityIcons } from '@expo/vector-icons';


import { colors } from '../../styles/theme.json'

const Header = ({title}) => {
    return (
        <>
        <StatusBar style="auto"/>
        <Box
            hasPadding
            fluid
            height="120px"
            justify="center"
            border={`1px solid ${colors.muted}50`}>
    <SafeAreaView style={{flexDirection: "row"}}>
        <Touchable width="80px"><MaterialCommunityIcons name="menu" size={20} color="black" /></Touchable>
        <Touchable align="center" justify="center">
            <Title>{title}</Title>
        </Touchable>
        <Touchable width="80px"></Touchable>
    </SafeAreaView>
</Box>
        </>

    )
}

export default Header