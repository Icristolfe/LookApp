import React from "react";
import { Box, Spacer, Text, Title, Button, Cover } from "..";


const CongratsModal = () => {
    return(
    
    <Box
    background="light"
    hasPadding
    justify="center"
    align="center"
    style={{
        position: "absolute",
        zIndex: 999,
        width: "100%",
        height: "100%"    }}>

            <Cover 
            width="200px"
            height="200px"
            background="transparent"
            source={require('../../assets/check-circle.png')}
            />

            <Spacer size="50px" />

        <Title>Congratulations!</Title>
        
        <Spacer />
        <Text>Your items are on the way and should arrive shortly</Text>

        <Spacer size="200px" />
        
        <Button
        onPress={() => {}}
        spacing="0px 0px 30px 0px"
        block
        background="danger"
        >
          <Text color='light' weight="300">Track your order</Text>
        </Button>
    </Box>
    )
}


export default CongratsModal