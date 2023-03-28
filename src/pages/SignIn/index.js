import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Box, Title, Text, Spacer, Button, Input } from '../../components'

import { FontAwesome } from '@expo/vector-icons';


const SignUp = () => {

    return (
      <>
       <StatusBar style="auto" />
        <Box background="light" align="center" justify="center" hasPadding>

            <Title weight="900" variant="homeTitle" bold color="dark">LOOKAPP</Title>
             <Spacer size="60px"/>

           <Text weight="600" variant="homeTitle" color="dark">SignIn my account.</Text>
            <Spacer size="25px" /> 

            <Input placeholder="E-mail" keyboardType="email-address" />
            <Spacer size="20px" /> 

            <Input placeholder="Password" secureTextEntry />
            <Spacer size="40px" /> 

        <Button  spacing="0px 0px 30px 0px" block background="danger">
          <Text color='light'> SignIn into my account</Text>
        </Button>

        <Text underline >Create new account</Text>

  
        </Box>
      </>
    )
}

export default SignUp