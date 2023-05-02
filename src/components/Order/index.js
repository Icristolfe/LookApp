import React from "react";


import { SimpleLineIcons } from '@expo/vector-icons';
import { Box, Text, Title, Spacer } from "..";
import { colors } from '../../styles/theme.json'
import util from "../../util";

const Order = () => {
    return (
        <Box
        radius="5px"
        style={{
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: util.toAlpha(colors.muted, 50),
        }}
        spacing="0px 0px 10px 0px"
        >
           <Box
           hasPadding
           row
           justify="space-between"
           align="center"
           width="100%"
           style={{
            borderBottomWidth: 1,
            borderBottomStyle: 'solid',
            borderBottomColor: util.toAlpha(colors.muted, 50),
           }}
           >

            <Box row align="center" height="40px">
                
                <SimpleLineIcons name="check" size={24} color="#00C48C" />
                <Text spacing="0px 0px 0px 7px" color="discountColor"> delivered </Text>

            </Box>
          

           <Text>August 17, 2016 3:58 PM</Text>
            </Box> 

           <Box
           hasPadding
           width="100%"
           style={{
            borderBottomWidth: 1,
            borderBottomStyle: 'solid',
            borderBottomColor: util.toAlpha(colors.muted, 50),
           }}
           >
            <Title>Order №1947034</Title>

            <Spacer/>
            
            <Text>Tracking number: <Text color="dark">IW3475453455</Text></Text>
           </Box>
           <Box
           hasPadding
           row
           justify="space-between"
           width="100%"
           >
           <Text>VALUE OF ITEMS <Text color="dark">$66,60</Text></Text>

           <Text>QUANTITY <Text color="dark">3</Text></Text>
            </Box>  
        </Box>
    )
}

export default Order