import React from 'react'
import { Box, ScrollView, Text } from '../../components'
import Story from '.'

const StoryList = () => {
    return (
            <Box height="260px" fluid>
            <Box fluid row justify="space-between" height="60px" hasPadding>
            <Text weight={900} color="dark"> Stories</Text>
            
            <Text weight={600} color="danger"> Show All</Text>
            </Box>
            <ScrollView
            horizontal
            style={{paddingLeft:20}}
            >
                {Array.from(Array(20))?.map(item => (
                    <Box key={Math.random()} >
                       <Story />
                    </Box>
                ))}
            </ScrollView>
        </Box>
    )
}

export default StoryList