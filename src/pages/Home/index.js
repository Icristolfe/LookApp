import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import { Title, Text, Button, Box, Spacer } from '../../components'



const Home = () => {
    return (
      <>
      <StatusBar style="auto" />
        <Box
        background="dark"
        align="center"
        >
        
          <Box justify="center" align="center">
          <Title color="light" weight="900" variant="homeTitle" TitleTopMargin>LOOKAPP</Title>

          <Text spacing="15px 0px 0px 0px" align="center" color="light">
          Stay on top of the fashion world {'\n'}
          and buy you favorite looks
          </Text>

          </Box>

          
          <Box fluid justify="flex-end" hasPadding align="center">

        <Button  spacing="0px 0px 30px 0px" block background="danger">
          <Text color='light'>SignIn my account</Text>
        </Button>

        <Text underline color='light'>Create new account</Text>
        <Spacer size="100px" />
        </Box>

        </Box>
        </>
      );
}

export default Home