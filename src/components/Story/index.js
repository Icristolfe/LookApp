import React from "react";
import { Box, Text, Touchable, Cover, Spacer } from "..";
import { colors } from '../../styles/theme.json'

const Story = () => {
    return (
        <Touchable
        onPress={() => alert('ola')}
        background="black"
        radius="10px"
        height="190px"
        spacing="0px 5px 0px"
        width="150px"
        >
            <Cover fluid height="100%" image="https://icon-library.com/images/icon-developer/icon-developer-12.jpg">
                <Box justify="space-between" fluid hasPadding background={`${colors.dark}80`} >
                <Cover border={`solid 1px ${colors.light}`} width="40px" height="40px" circle image="https://icon-library.com/images/icon-developer/icon-developer-12.jpg" />
                <Box height="50px" justify="flex-end" >
                    <Text  weight="bold"  color="light">Ícaro Cristolfe</Text>
                    <Text variant="small" color="light">2 min ago</Text>
                    </Box>
                </Box>               
            </Cover>
        </Touchable>
    )
}

export default Story