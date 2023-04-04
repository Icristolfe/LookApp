import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Box, Title, Text, Spacer, Button, Input } from '../../components'
import { Touchable } from '../../components/index';

const SignIn = ({navigation}) => {

    return (
        <>
         <StatusBar style="auto" />
        <Box background="light" align="center" justify="center" hasPadding>
            <Title bold>Create new account</Title>
             <Spacer />
           <Text>Enter your details bellow:</Text>
           <Spacer size="40px"/> 
            <Input placeholder="Name" keyboardType="default"/>
            <Spacer size="20px" /> 
            <Input placeholder="E-mail" keyboardType="email-address" />
            <Spacer size="20px" /> 
            <Input placeholder="Password" secureTextEntry />
            <Spacer size="40px" /> 

        <Button  spacing="0px 0px 30px 0px" block background="danger">
          <Text color='light'> Create new account</Text>
        </Button>

        <Touchable  onPress={() => navigation.navigate('SignIn')}>
        <Text underline >Back to SignIn</Text>

        </Touchable>
        </Box>
        </>
    )
}

export default SignIn